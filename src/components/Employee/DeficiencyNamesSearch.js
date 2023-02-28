function DeficiencyNamesSearch() {
    return ( <AsyncSelect isClearable defaultValue={"Organization Name"} cacheOptions defaultOptions loadOptions={loadOptions} onChange={handleChange} name="organization" /> );
}

export default DeficiencyNamesSearch;