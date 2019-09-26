import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Person from './Person';

const Persons = () => (
    <Query query={gql`
        {
            allPersons {
                name
            }
        }
    `}>
    
    {({loading, error, data}) => {
        if (loading) return <p>Loading ...</p>;
        if (error) return <p>Error : (</p>;
        
        return data.allPersons.map((currentPerson) => (
            <Person person={currentPerson} />
        ));
    }}
    </Query>

);

export default Persons;