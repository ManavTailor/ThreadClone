// pages/api/updateUser.js
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'PATCH') {
    try {
      const { id, name, email } = req.body; // Assuming you're sending the ID, name, and email in the request body
      
      // Update the user data in your database using the provided ID
      // Replace the following code with your actual database update logic
      // Example using a mock user data array:
      const updatedUserData = mockUserData.map((user: { id: any; name: any; email: any; }) => {
        if (user.id === id) {
          user.name = name;
          user.email = email;
        }
        return user;
      });

      // Send a success response with the updated user data
      return res.status(200).json(updatedUserData);
    } catch (error) {
      console.error('Error updating user:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    return res.status(405).end(); // Method Not Allowed if not a PATCH request
  }
}
