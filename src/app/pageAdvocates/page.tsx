"use client";

import { useEffect, useState } from "react";
import { getAdvocates } from "../clientApi/advocates";
import { Advocate } from "../clientApi/advocates";
import AdvocatesTable from "../components/advocatesTable";
import { SearchInput } from "../components/searchInput";

export default function AdvocatesPage() {
  const [originalAdvocates, setOriginalAdvocates] = useState<Advocate[]>([])
  const [advocates, setAdvocates] = useState<Advocate[]>([]);

  // Fetch data and set initial state
  useEffect(() => {
    (async () => {
      const advocates = await getAdvocates()
      setAdvocates(advocates || [])
      setOriginalAdvocates(advocates || [])
    })()
  }, []);


  const onSearchChange = (newSearchTerm:string) => {
    if(!newSearchTerm) {
      setAdvocates(originalAdvocates);
      return
    }

    setAdvocates(filterAdvocates(originalAdvocates, newSearchTerm));
  };

  return (
    <>
      <h1>Solace Advocates</h1>
      <div className="flex justify-end w-full mb-8">
        <div className="w-100">
          <SearchInput placeholder="Search for advocates..." onValueChange={onSearchChange} />
        </div>
      </div>
      <AdvocatesTable advocates={advocates} />
    </>
  );
}

// Filters advocates by a search string
// Note: keeping this outside of component to make it easier to test
const filterAdvocates = (advocates: Advocate[], searchTerm: string): Advocate[] => {
  searchTerm = searchTerm.toLowerCase()

  return advocates.filter((advocate) => {
   if (
      advocate.firstName.toLowerCase().includes(searchTerm) ||
      advocate.lastName.toLowerCase().includes(searchTerm) ||
      advocate.city.toLowerCase().includes(searchTerm) ||
      advocate.degree.toLowerCase().includes(searchTerm) ||
      advocate.yearsOfExperience.toString().includes(searchTerm) ||
      advocate.phoneNumber.toString().includes(searchTerm)
    ) {
      return true
    }

    const hasMatchingSpecialty = advocate.specialties.find(specialty => specialty.toLowerCase().includes(searchTerm))
    if(hasMatchingSpecialty) {
      return true
    }

    return false
  });
}
