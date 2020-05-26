import { useContext, useEffect, useState } from 'react';
import { FormValuesContext } from '../Contexts/FormValuesContext';
import { UserContext } from '../Contexts/UserContext';
import { FormErrorsContext } from '../Contexts/FormErrorsContext';
import { GlobalContext } from '../Contexts/GlobalContext';
import API from '../Utilities/API';
import validate from '../Utilities/formValidations';

const useForm = (callback) => {
  const { formValues, setFormValues } = useContext(FormValuesContext);
  const { formErrors, setFormErrors } = useContext(FormErrorsContext);
  const { user, setUser } = useContext(UserContext);
  const { global, setGlobal } = useContext(GlobalContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [data, setData] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleCheckbox = (e) => {
    const { name, checked } = e.target;

    if (checked == true) {
      console.log('hey there');
      setFormValues({
        ...formValues,
        [name]: true,
      });
    } else {
      setFormValues({
        ...formValues,
        [name]: false,
      });
    }
  };

  const clearForm = () => {
    setIsSubmitting(false);
    let tempValues = { ...formValues };
    // let tempErrors = { ...formErrors };

    // for each key in the form values array, set the value to null
    for (let [key, value] of Object.entries(tempValues)) {
      tempValues[key] = null;
    }
    setFormValues({});

    // for each key in the form errors array, set the value to null
    // for (let [key, value] of Object.entries(tempErrors)) {
    //   tempErrors[key] = null;
    // }
    setFormErrors({});
  };

  const executeCallback = (callbackName) => {
    switch (callbackName) {
      case 'authenticateUser':
        authenticateUser();
        break;
      case 'registerUser':
        registerUser();
        break;
      case 'createProject':
        createProject();
        break;
      case 'createTest':
        createTest();
        break;
      case 'deleteProject':
        deleteProject();
        break;
    }
  };

  const createProject = () => {
    API.createProject({
      name: formValues.projectName,
    }).then((res) => {
      if (res.status === 200) {
        clearForm();
        setData(res.data);
      }
    });
  };
  const deleteProject = () => {
    API.deleteProject(global.currentProject).then((res) => {
      if (res.status === 200) {
        clearForm();
        setData(res.data);
      }
    });
  };
  const createTest = () => {
    API.createTest({
      subject: formValues.testSubject,
      ProjectId: parseInt(global.currentProject),
    }).then((res) => {
      if (res.status === 200) {
        clearForm();
        setData(res.data);
      }
    });
  };
  const authenticateUser = () => {
    if (formErrors.email || formErrors.password) {
      return 0;
    }
    API.authenticate({
      email: formValues.email,
      password: formValues.password,
    }).then((res) => {
      if (res.status === 200) {
        clearForm();
        setUser({ ...user, isAuthenticated: true });
      }
    });
  };

  const registerUser = () => {
    if (
      formErrors.firstName ||
      formErrors.lastName ||
      formErrors.email ||
      formErrors.agreement ||
      formErrors.password ||
      formErrors.passwordConfirmation
    ) {
      return 0;
    }
    API.createUser({
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      agreement: formValues.agreement,
      password: formValues.password,
      passwordConfirmation: formValues.passwordConfirmation,
    }).then((res) => {
      if (res.status === 200) {
        clearForm();
        setUser({ ...user, isCreated: true });
      }
    });
  };

  useEffect(() => {
    // check to see if there are errors
    // if not, call our callback
    if (isSubmitting) {
      executeCallback(callback);
    }
  }, [formErrors]);

  return {
    handleChange,
    isSubmitting,
    handleSubmit,
    handleCheckbox,
    clearForm,
    formValues,
    formErrors,
    authenticateUser,
    registerUser,
    data,
  };
};

export default useForm;
