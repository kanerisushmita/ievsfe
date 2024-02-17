import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const upload = async (dir, file, fileName) => {
  // Uploads file to AWS S3

  if (file == null) {
    return;
  }

  const s3Client = new S3Client({
    region: "ap-south-1",
    credentials: {
      accessKeyId: import.meta.env.VITE_APP_AWS_ACCESS,
      secretAccessKey: import.meta.env.VITE_APP_AWS_SECRET,
    },
  });

  const params = {
    Bucket: import.meta.env.VITE_APP_BUCKET_NAME,
    Key: `${dir}/${fileName}`,
    Body: file,
  };

  try {
    await s3Client.send(new PutObjectCommand(params));
    return `https://ievs.s3.ap-south-1.amazonaws.com/${dir}/${fileName}`;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
};

export { upload };
