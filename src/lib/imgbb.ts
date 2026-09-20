/**
 * ImgBB Image Upload Helper
 * Handles client-side and server-side image uploads to ImgBB API
 */

export interface ImgBBResponse {
  data: {
    id: string;
    title: string;
    url_viewer: string;
    url: string;
    display_url: string;
    width: number;
    height: number;
    size: number;
    time: number;
    expiration: number;
    image: {
      filename: string;
      name: string;
      mime: string;
      extension: string;
      url: string;
    };
    thumb: {
      filename: string;
      name: string;
      mime: string;
      extension: string;
      url: string;
    };
    delete_url: string;
  };
  success: boolean;
  status: number;
}

/**
 * Uploads a File to ImgBB and returns the hosted image URL
 * @param file - The Image File object to upload
 * @returns Promise<string> - The uploaded direct display URL
 */
export async function uploadToImgBB(file: File): Promise<string> {
  const apiKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY;
  const apiUrl =
    process.env.NEXT_PUBLIC_IMGBB_API_URL ||
    "https://api.imgbb.com/1/upload";

  if (!apiKey) {
    throw new Error(
      "ImgBB API key is missing. Please add NEXT_PUBLIC_IMGBB_API_KEY to your environment variables."
    );
  }

  if (!file) {
    throw new Error("No image file provided for upload");
  }

  // Validate file type
  if (!file.type.startsWith("image/")) {
    throw new Error("Selected file must be an image (PNG, JPG, WEBP, GIF)");
  }

  // Validate file size (maximum 16MB for ImgBB)
  const maxSizeInBytes = 16 * 1024 * 1024;
  if (file.size > maxSizeInBytes) {
    throw new Error("Image size must be smaller than 16MB");
  }

  const formData = new FormData();
  formData.append("image", file);

  try {
    const response = await fetch(`${apiUrl}?key=${apiKey}`, {
      method: "POST",
      body: formData,
    });

    const result = (await response.json()) as ImgBBResponse;

    if (!response.ok || !result.success) {
      const errorMsg =
        (result as unknown as { error?: { message?: string } })?.error
          ?.message || "Failed to upload image to ImgBB";
      throw new Error(errorMsg);
    }

    return result.data.display_url || result.data.url;
  } catch (error: unknown) {
    const msg =
      error instanceof Error
        ? error.message
        : "Failed to upload image to ImgBB. Please try again.";
    throw new Error(msg);
  }
}
