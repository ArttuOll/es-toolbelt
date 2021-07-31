export type UiLanguageOption = "fi" | "sv" | "en" | "";

type UiLanguageAndMutator = [
  UiLanguageOption,
  (uiLanguage: UiLanguageOption) => void
];

/**
* A hook, which gives you the current UI language of the application, as well as a function to
* update it.
*
* This implementation assumes that the current UI language is stored into a global state variable,
* which is updated with an useReducer-hook, which is passed to child components through useContext.
*/
function useUiLanguage(): UiLanguageAndMutator {
  const { state, dispatch } = useContext(CurrentDraftContext);

  function setUiLanguage(uiLanguage: UiLanguageOption) {
    if (languageSelectionIsDifferentFromCurrent(state, uiLanguage)) {
      dispatch({ type: "updateUserUiLanguage", uiLanguage: uiLanguage });

      document.documentElement.lang = uiLanguage;

      i18n.changeLanguage(uiLanguage, onLanguageChangeError);
    }
  }

  return [state.user.uiLanguage, setUiLanguage];
}

function onLanguageChangeError(error: any) {
  if (error) {
    console.log(`Something went wrong loading translation file: ${error}`);
  }
}

function languageSelectionIsDifferentFromCurrent(
  state: Draft,
  currentUiLanguage: string
) {
  return currentUiLanguage !== state.user.uiLanguage;
}

export default useUiLanguage;
