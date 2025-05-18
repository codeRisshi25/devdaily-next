"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import { XIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageUploadProps {
  onChange: (url: string) => void;
  value: string;
  endpoint: "imageUploader";
}

function ImageUpload({ endpoint, onChange, value }: ImageUploadProps) {
  if (value) {
    return (
      <div className="relative size-40">
        <img src={value} alt="Upload" className="rounded-md size-40 object-cover" />
        <button
          onClick={() => onChange("")}
          className="absolute top-1 right-1 p-1 bg-black/30 backdrop-blur-sm rounded-full shadow-sm"
          type="button"
        >
          <XIcon className="h-4 w-4 text-white" />
        </button>
      </div>
    );
  }
  return (
    <div className="max-w-[300px] mx-auto">
      <UploadDropzone
        endpoint={endpoint}
        onClientUploadComplete={(res) => {
          onChange(res?.[0].url);
        }}
        onUploadError={(error: Error) => {
          console.log(error);
        }}
        className={cn(
          "border-dashed border-2 border-muted rounded-lg p-4",
          "hover:bg-muted/50 transition-colors duration-200",
          "h-60 w-full flex items-center justify-center"
        )}
      />
    </div>
  );
}
export default ImageUpload;