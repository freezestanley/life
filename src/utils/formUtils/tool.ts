export const autoScrollInValidateFailed = (formRef: any) => {
  if (formRef.current) {
    setTimeout(() => {
      const elements = formRef.current.querySelectorAll('.fm-form-item-error');
      if (elements && elements.length) {
        if (!elements[0].scrollIntoView) return;
        elements[0].scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'center',
        });
      }
    }, 30);
  }
};
