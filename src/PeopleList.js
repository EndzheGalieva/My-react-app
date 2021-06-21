import React from 'react';
import { PeopleListItem } from './PeopleListItem';

export const PeopleList = ({ people }) => (
  <>
    {people.map(person => <PeopleListItem person={person} key={person.name} />)}
  </>
);

