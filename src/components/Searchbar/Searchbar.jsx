import { useState } from 'react';
import PropTypes from 'prop-types';

import {
    Header,
    SearchForm,
    SearchFormButton,
    SearchFormInput,
    IconSearch,
} from '../ui/Searchbar';
// import { toast } from 'react-toastify';

export default function Searchbar({ onSubmit }) {

    const [keyword, setKeyword] = useState('')

    const handleKeywordChange = e => {
        setKeyword(e.currentTarget.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (keyword.trim() === '') {
            alert('What would you like to find?');
            return;
        }

        onSubmit(keyword);
        setKeyword('');
    };

    return (
        <Header>
            <SearchForm onSubmit={handleSubmit}>
                <SearchFormButton type="submit">
                    <IconSearch />
                </SearchFormButton>

                <SearchFormInput
                    type="text"
                    autocomplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={keyword}
                    onChange={handleKeywordChange}
                />
            </SearchForm>
        </Header>
    );
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func,
}