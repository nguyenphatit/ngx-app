import { NodePlopAPI } from "plop";

export default function plop(plop: NodePlopAPI) {
  plop.setHelper('parsePropsInterface', (propsList: string) => {
    if (!propsList) return '';
    return propsList
        .split(',')
        .map((p: string) => {
          const [key, type] = p?.split(':').map((s: string) => s.trim());
          return key && type ? `${key}: ${type};` : '';
        })
        .filter(Boolean)
        .join('\n  ');
  });

  plop.setHelper('parsePropsInterfaceToKeys', (propsList: string) => {
    if (!propsList) return '';
    return propsList
        .split(',')
        .map((p: string) => {
          const [key, type] = p?.split(':').map((s: string) => s.trim());
          return key && type ? key : '';
        })
  })

  plop.setGenerator("page", {
    description: "Create a new page",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Page name"
      },
      {
        type: "confirm",
        name: "clientComponent",
        message: "Using client component?",
        default: true,
      },
      {
        type: "confirm",
        name: "motion",
        message: "Add motion?",
        default: false,
      },
      {
        type: "confirm",
        name: "props",
        message: "Add props to page?",
        default: false,
      },
      {
        type: 'input',
        name: 'propsList',
        message: 'Enter props (e.g., title:string, onClick:() => void)',
        when: answers => answers.props,
      },
      {
        type: 'confirm',
        name: 'addStyle',
        message: 'Do you want to include a style file?',
        default: false,
      },
      {
        type: 'list',
        name: 'styleType',
        message: 'Choose a style type:',
        choices: ['css', 'scss', 'sass', 'less'],
        when: answers => answers.addStyle,
      },
      {
        type: 'confirm',
        name: 'addUnitTest',
        message: 'Add unit test for this page?',
        default: false,
      }
    ],
    actions: function (answers) {
      const actions = [
        {
          type: 'add',
          path: 'app/{{dashCase name}}/page.tsx',
          templateFile: 'templates/page.tsx.hbs',
        }
      ];

      if (answers?.addStyle) {
        actions.push({
          type: 'add',
          path: 'app/{{dashCase name}}/styles.{{styleType}}',
          templateFile: 'templates/styles.hbs',
        })
      }

      if (answers?.addUnitTest) {
        actions.push({
          type: 'add',
          path: 'app/{{dashCase name}}/__test__/{{dashCase name}}.test.tsx',
          templateFile: 'templates/test.tsx.hbs',
        })
      }

      return actions;
    }
  })

  plop.setGenerator("base-page", {
    description: "Create a new base page (page.tsx and layout.tsx)",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Page name"
      },
      {
        type: "confirm",
        name: "clientComponent",
        message: "Using client component?",
      },
      {
        type: "confirm",
        name: "motion",
        message: "Add motion?",
      },
      {
        type: "confirm",
        name: "clientLayout",
        message: "Using client layout?",
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'app/{{dashCase name}}/page.tsx',
        templateFile: 'templates/page.tsx.hbs',
      },
      {
        type: 'add',
        path: 'app/{{dashCase name}}/layout.tsx',
        templateFile: 'templates/layout.tsx.hbs',
      }
    ]
  })

  plop.setGenerator("e2e-test", {
    description: "Create a new e2e test",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Test name"
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'tests/{{dashCase name}}.spec.ts',
        templateFile: 'templates/e2e-test.hbs',
      }
    ]
  })
}