import { test, expect } from '@playwright/test';
import { TestData } from '../data/TestData';

const groupName = 'VK Testers'

test('Searching group by "VK Testers"', async ({ request }) => {

    const response = await request.post(`${TestData.baseUrl}/groups.search`, {
        form: {
            user_id: TestData.user_id,
            access_token: TestData.access_token,
            v: TestData.v,
            q: groupName,
        }
    });

    const responseData = await response.json();

    expect(responseData.response.items).toContainEqual(
        expect.objectContaining({
            name: groupName,
        })
    );
});
