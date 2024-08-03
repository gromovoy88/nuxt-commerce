export interface UsePreviewImage {
  previewImageUrl: Ref<string>;
  setPreviewImage: (imageUrl: string) => void;
}

export function usePreviewImage(): UsePreviewImage {
  const previewImageUrl = useState<string>('previewImageUrl', () => '');

  function setPreviewImage(imageUrl: string): void {
    previewImageUrl.value = imageUrl;
  }

  return {
    previewImageUrl,
    setPreviewImage
  };
}
