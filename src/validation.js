import { extend, localize } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';

function setValidationLocalization(selectedLocaleCode) {
	import(`vee-validate/dist/locale/${selectedLocaleCode}.json`).then(
		(locale) => {
			localize(selectedLocaleCode, locale);
		}
	);
}

function setValidationRules() {
	Object.keys(rules).forEach((rule) => {
		extend(rule, rules[rule]);
	});
}

export { setValidationRules, setValidationLocalization };
