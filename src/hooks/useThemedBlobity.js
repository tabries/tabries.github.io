import { useEffect } from "react";
import { useColors } from "../context/ColorContext";

/**
 * Custom hook to sync Blobity colors with the current theme
 * Updates Blobity's color and dotColor when theme changes
 * @param {Object} blobity - Blobity instance from useBlobity hook
 */
export const useThemedBlobity = (blobity) => {
  const { colors } = useColors();

  useEffect(() => {
    console.log('blobity.updateOptions', blobity.updateOptions)
    if (blobity.current && blobity.current.updateOptions) {
      blobity.current.updateOptions({
        color: colors.secondary,
        dotColor: colors.primary,
      });
    }
  }, [colors.primary, colors.secondary, blobity]);
};
