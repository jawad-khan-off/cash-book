import { ID, OAuthProvider, Query } from "appwrite";
import { account, appwriteConfig, tableDB } from "./client";
import { redirect } from "react-router";

// export const getExistingUser = async (id) => {
//   try {
//     const { rows, total } = await tableDB.listRows(
//       appwriteConfig.databaseId,
//       appwriteConfig.usersTableId,
//       [Query.equal("accountId", id)],
//     );
//     return total > 0 ? rows[0] : null;
//   } catch (error) {
//     console.error("Error fetching user:", error);
//     return null;
//   }
// };

export const storeUserData = async () => {
  try {
    const user = await account.get();
    if (!user) throw new Error("User not found");

    const { providerAccessToken } = (await account.getSession("current")) || {};
    const profilePicture = providerAccessToken
      ? await getGooglePicture(providerAccessToken)
      : null;

    const createdUser = await tableDB.createRow(
      appwriteConfig.databaseId,
      appwriteConfig.usersTableId,
      ID.unique(),
      {
        accountId: user.$id,
        email: user.email,
        name: user.name,
        imageUrl: profilePicture,
      },
    );

    if (!createdUser.$id) redirect("/sign-in");
  } catch (error) {
    console.error("Error storing user data:", error);
  }
};

const getGooglePicture = async (accessToken) => {
  try {
    const response = await fetch(
      "https://people.googleapis.com/v1/people/me?personFields=photos",
      { headers: { Authorization: `Bearer ${accessToken}` } },
    );
    if (!response.ok) throw new Error("Failed to fetch Google profile picture");

    const { photos } = await response.json();
    return photos?.[0]?.url || null;
  } catch (error) {
    console.error("Error fetching Google picture:", error);
    return null;
  }
};

export const loginWithGoogle = () => {
  try {
    account.createOAuth2Session(
      OAuthProvider.Google,
      `${window.origin}/`,
      `${window.origin}/sign-in`,
    );
  } catch (e) {
    console.log("error creating OAuth session", e);
  }
};

export const logoutUser = async () => {
  try {
    await account.deleteSession("current");
  } catch (error) {
    console.error("Error during logout:", error);
  }
};
