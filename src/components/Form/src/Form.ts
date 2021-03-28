

// import
import { props } from './props'

// vue tool
import { defineComponent, getCurrentInstance, provide, SetupContext, ref, reactive } from 'vue'

const useProvide = () => {
    const instance = getCurrentInstance();

    provide('form', instance)
}

const useRegisterField = () => {
    const instance = getCurrentInstance()

    const registerField = (input: any) => {
        (instance?.proxy as unknown as FormSetupContext).inputs.push(input)
    }

    return {
        registerField
    }
}


interface FormSetupContext {
    inputs: Object[]
}

const Form = defineComponent({
    name: 'Form',
    emits: [''],
    props,
    setup(props) {

        const state: FormSetupContext = reactive({
            inputs: []
        });

        useProvide();

        const { registerField } = useRegisterField();

        return {
            input: state.inputs,
            registerField
        }
    }
});

export default Form
