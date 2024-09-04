import {
    S3Client,
    // This command supersedes the ListObjectsCommand and is the recommended way to list objects.
    ListObjectsV2Command,
  } from "@aws-sdk/client-s3";

const client = new S3Client({
    region: "us-east-1",
    credentials: {
        secretAccessKey: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY ?? "",
        accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY ?? "",
    },
});

export async function getImagesFromS3() {
    const command = new ListObjectsV2Command({
        Bucket: "pat-pic-000-000-001",
        MaxKeys: 1000,
    });

    try {
        const data = await client.send(command);

        if (data.Contents && data.Contents.length > 0) {
            const urls = data.Contents.map(item => {
                return `https://${command.input.Bucket}.s3.amazonaws.com/${item.Key}`;
            });
            return urls;
        } else {
            console.log("No contents found in the bucket.");
            return []; // Return an empty array if Contents is undefined or empty
        }
    } catch (error) {
        console.error("Error fetching images from S3:", error);
        return []; // Return an empty array in case of error
    }
}