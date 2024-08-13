import { HTTPError } from 'ky';

import { createPersonalAccessToken, deleteUser } from '#src/api/admin-user.js';
import { createUserByAdmin } from '#src/helpers/index.js';
import { devFeatureTest, randomString } from '#src/utils.js';

devFeatureTest.describe('personal access tokens', () => {
  it('should throw error when creating PAT with existing name', async () => {
    const user = await createUserByAdmin();
    const name = randomString();
    await createPersonalAccessToken({ userId: user.id, name });

    const response = await createPersonalAccessToken({ userId: user.id, name }).catch(
      (error: unknown) => error
    );

    expect(response).toBeInstanceOf(HTTPError);
    expect(response).toHaveProperty('response.status', 422);
    expect(await (response as HTTPError).response.json()).toHaveProperty(
      'code',
      'user.personal_access_token_name_exists'
    );

    await deleteUser(user.id);
  });

  it('should throw error when creating PAT with invalid user id', async () => {
    const name = randomString();
    const response = await createPersonalAccessToken({
      userId: 'invalid',
      name,
    }).catch((error: unknown) => error);

    expect(response).toBeInstanceOf(HTTPError);
    expect(response).toHaveProperty('response.status', 404);
  });

  it('should throw error when creating PAT with empty name', async () => {
    const user = await createUserByAdmin();
    const response = await createPersonalAccessToken({
      userId: user.id,
      name: '',
    }).catch((error: unknown) => error);

    expect(response).toBeInstanceOf(HTTPError);
    expect(response).toHaveProperty('response.status', 400);

    await deleteUser(user.id);
  });

  it('should throw error when creating PAT with invalid expiresAt', async () => {
    const user = await createUserByAdmin();
    const name = randomString();
    const response = await createPersonalAccessToken({
      userId: user.id,
      name,
      expiresAt: Date.now() - 1000,
    }).catch((error: unknown) => error);

    expect(response).toBeInstanceOf(HTTPError);
    expect(response).toHaveProperty('response.status', 400);

    await deleteUser(user.id);
  });

  it('should be able to create multiple PATs', async () => {
    const user = await createUserByAdmin();
    const name1 = randomString();
    const name2 = randomString();
    const pat1 = await createPersonalAccessToken({
      userId: user.id,
      name: name1,
      expiresAt: Date.now() + 1000,
    });
    const pat2 = await createPersonalAccessToken({
      userId: user.id,
      name: name2,
    });

    expect(pat1).toHaveProperty('name', name1);
    expect(pat2).toHaveProperty('name', name2);

    await deleteUser(user.id);
  });
});
