// styled components
import {StyledForm, Container} from '@widgets/UserSettings/style';
import {Input} from '@ui/Field';

// components
import DropFiles from '@components/DropFiles';
import Btn from '@ui/Btn';
import LabeledFormInput from '@ui/LabeledFormInput';
import CustomSelect from '@ui/Select';
import DateInput from '@components/MaskedInputs/Date';
import Phone from '@components/MaskedInputs/Phone';

// utils
import PropTypes from 'prop-types';
import countryList from 'react-select-country-list';
import {City} from 'country-state-city';

// hooks
import {useState} from 'react';
import useNotistack from '@hooks/useNotistack';

const Form = ({type}) => {
    const {notify} = useNotistack('Your changes have been successfully saved.', 'success');
    const hint = 'Drag image here or click to select file';

    const [selectedCountry, setSelectedCountry] = useState();
    const [selectedCity, setSelectedCity] = useState();
    const [cities, setCities] = useState([]);

    const getCountriesOptions = () => {
        let countries = countryList().getData();
        for (let i = 0; i < countries.length; i++) {
            if (countries[i].value === 'RU') {
                countries[i].label = 'Russia [terrorist state]';
            }
        }
        return countries
    }

    const handleCountryChange = (country) => {
        setSelectedCountry(country);
        setSelectedCity(null);
        let options = [];
        const rawData = City.getCitiesOfCountry(country.value);
        rawData.map(item => options.push({value: item.name, label: item.name}));
        setCities(options);
    }

    return (
        <StyledForm action="#" method="post" id={`settings_${type}`} onSubmit={e => e.preventDefault()}>
            <div className="wrapper">
                <DropFiles multiple={false} type="image">
                    <i className="icon icon-image" aria-label={hint} />
                    <span className="hint">{hint}</span>
                </DropFiles>
                <Container>
                    <LabeledFormInput id={`${type}ProfileFirstName`} title="First Name" placeholder="First Name"/>
                    <LabeledFormInput id={`${type}ProfileLastName`} title="Last Name" placeholder="Last Name"/>
                    <LabeledFormInput id={`${type}ProfileProfileResidence`} title="Residence" placeholder="Residence" customInput={
                        <CustomSelect label={`${type}ProfileProfileResidence`} placeholder="Residence" options={getCountriesOptions()} value={selectedCountry}
                                      variant="basic" changeHandler={e => handleCountryChange(e)}/>
                    }/>
                    <LabeledFormInput id={`${type}ProfileCity`} title="City" placeholder="City" customInput={
                        <CustomSelect label={`${type}ProfileCity`} placeholder="City" options={cities} value={selectedCity}
                                      variant="basic" changeHandler={e => setSelectedCity(e)}/>
                    }/>
                    <LabeledFormInput id={`${type}ProfileStreet`} title="Street" placeholder="Street"/>
                    <LabeledFormInput id={`${type}ProfileAddress1`} title="Address Line 1" placeholder="Address Line 1"/>
                    <LabeledFormInput id={`${type}ProfileAddress2`} title="Address Line 2" placeholder="Address Line 2"/>
                    <LabeledFormInput id={`${type}ProfileBirthday`} title="Birthday" placeholder="Birthday"
                                      customInput={<Input as={DateInput} id={`${type}ProfileBirthday`} />}/>
                    {
                        type === 'patient' && <>
                            <LabeledFormInput id="patientProfilePhone" title="Phone" placeholder="Phone" customInput={
                                <Phone id="patientProfilePhone" placeholder="+1(000)-000-00-00" />
                            } />
                            <LabeledFormInput id="patientProfileEmail" title="Email" placeholder="example@domain.com"/>
                        </>
                    }
                </Container>
            </div>
            <Btn text="Save" handler={notify} type="submit" />
        </StyledForm>
    )
}

Form.propTypes = {
    type: PropTypes.oneOf(['patient', 'doctor']).isRequired
}

export default Form;