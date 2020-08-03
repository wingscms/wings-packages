import { useTheme as _useTheme, Theme as _Theme } from '@wingscms/components';

class Theme extends _Theme {
  static instance = (...args) => {
    return new Theme(...args);
  };

  get campaignFormBackgroundColor() {
    return this.variables.campaignFormBackgroundColor || this.formBackgroundColor;
  }

  get campaignFormButtonBackgroundColor() {
    return this.variables.campaignFormButtonBackgroundColor || null;
  }

  get campaignFormButtonBackgroundHoverColor() {
    return this.variables.campaignFormButtonBackgroundHoverColor || null;
  }

  get campaignFormButtonBorderColor() {
    return this.variables.campaignFormButtonBorderColor || null;
  }

  get campaignFormButtonBorderHoverColor() {
    return this.variables.campaignFormButtonBorderHoverColor || null;
  }

  get campaignFormLinkLineColor() {
    return this.variables.campaignFormLinkLineColor || this.secondaryColor;
  }

  get campaignFormLinkTextColor() {
    return this.variables.campaignFormLinkTextColor || this.formLinkTextColor;
  }

  get campaignFormTextColor() {
    return this.variables.campaignFormTextColor || this.formTextColor;
  }

  get testimonialBackgroundColor() {
    return this.variables.testimonialBackgroundColor || this.elementBackgroundColor;
  }
}

const getThemeInstance = theme => {
  switch (true) {
    case theme instanceof Theme:
      return theme;
    case theme instanceof _Theme:
      return Theme.instance(theme.variables);
    default:
      return Theme.instance(theme);
  }
};

export const t = cb => ({ theme, ...props }) => cb(getThemeInstance(theme), props);

export const useTheme = () => {
  const theme = _useTheme();
  return getThemeInstance(theme);
};
