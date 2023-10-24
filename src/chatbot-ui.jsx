import ForgeUI, {
    render,
    Button,
    Form,
    Fragment,
    TextField,
    CheckboxGroup,
    Checkbox,
    Macro,
    Text,
    useState,
    ModalDialog,
    User,
    useProductContext,
  } from "@forge/ui";

import api, {route} from "@forge/api";

const dblookup = require('./db.jsx');

const ChatBotUI = ()=>{
    const context = useProductContext();
    // useState is a UI kit hook we use to manage the form data in local state
    const [formState, setFormState] = useState(undefined);
    const [displayHelperPanel, setHelperPanel] = useState(false);
    // const displayHelperPanel = false;
    const [helperArr, setHelperArr] = useState([]);
    const fetchRepository = async (workspaceId, repositoryId) => {
      const res = await api
          .asApp()
          .requestBitbucket(route`/2.0/repositories/${workspaceId}/${repositoryId}`);
  
      const data = await res.json();
      // console.log(data);
      return data;
  };
  
  const [repository] = useState(
    async () =>
        await fetchRepository(
        context.workspaceId,
        context.extensionContext.repository.uuid
        )
  );

  const findHelpers = async () => {
    console.log("DEBUG");
    const helpers = [];
    for (let i = 0; i < 2; i++)
      helpers.push(<User accountId="712020:e1e3f592-c9bf-406d-ab75-8aa8ac590e14"/>);
    // console.log(helpers);
    setHelperArr({helpers});
    // console.log(helperArr);
  }

  // console.log(`Repository full name: ${repository.full_name}`);

    // Handles form submission, which is a good place to call APIs, or to set component state...
    const onSubmit = async (formData) => {
        
      /**
       * formData:
       * {
       *    username: 'Username',
       *    products: ['jira']
       * }
       */
      var ids = dblookup(formData["userProblem"]);
      console.log("ID:", ids);
      setFormState(formData);
      setHelperPanel(true);
      findHelpers();
      // console.log(helperArr);
      // displayHelperPanel = true; //difference between setting values in these two ways
      // console.log(displayHelperPanel);
      return false;
    };
  
    return (
      <Fragment>
        <Form onSubmit={onSubmit}>
            <TextField name="userProblem" label="Describe your problem" />
        </Form>
        {
          displayHelperPanel && (
            <ModalDialog
              header="Helpers found"
              children={helperArr}
              onClose={() =>
                {
                  setHelperPanel(false);
                  // const helpers = [];
                  // setHelperArray({helpers});
                }
              }
            >
              </ModalDialog>
          )
        }
        </Fragment>
        // {/* {formState && <Text>{JSON.stringify(formState)}</Text>} */}
    );
  };
  
export default ChatBotUI;