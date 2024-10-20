import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { MageImageUpload } from "../Icons/Upload";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function UploadPhotos() {
  return (
    <div className="upload-container">
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<MageImageUpload />}
      >
        Upload files
        <VisuallyHiddenInput
          type="file"
          onChange={(event) => console.log(event.target.files)}
          multiple
        />
      </Button>
    </div>
  );
}
