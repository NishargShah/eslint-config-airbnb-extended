import { plugins, rules } from 'eslint-config-airbnb-extended';

const findRules = (rulesObj) =>
  Object.values(rulesObj).reduce((acc, value) => {
    if (value.rules) {
      acc.push(value.rules);
      return acc;
    }

    acc.push(...findRules(value));
    return acc;
  }, []);

const config = [
  ...Object.values(plugins),
  ...findRules(rules).map((item, index) => ({
    name: `rule/${index}`,
    rules: item,
  })),
];

export default config;
