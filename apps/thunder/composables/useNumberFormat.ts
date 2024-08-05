export type NumberFormatProps = Intl.NumberFormatOptions;
export type NumberFormat = Intl.NumberFormat;

export function useNumberFormat(props?: NumberFormatProps) {
  function formatNumber(): NumberFormat {
    return new Intl.NumberFormat('en-US', props);
  }

  return {
    formatNumber
  };
}
