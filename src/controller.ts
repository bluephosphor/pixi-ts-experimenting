export const Input = new Map<string, boolean>();

export const Controller = {
  init: () => {
    document.addEventListener(
      "keydown",
      (event) => {
        Input.set(event.key, true);
      },
      false
    );
    document.addEventListener(
      "keyup",
      (event) => {
        Input.set(event.key, false);
      },
      false
    );
  },
};
