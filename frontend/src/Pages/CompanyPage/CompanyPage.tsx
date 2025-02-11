import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { CompanyProfile } from "../../company";
import { getCompanyProfile } from "../../api";

interface Props { }

const CompanyPage = (props: Props) => {
    let { ticker } = useParams();
    const [company, setCompany] = useState<CompanyProfile>();

    useEffect(() => {
      const getProfilesInit = async () => {
        const result = await getCompanyProfile(ticker!);
        setCompany(result?.data[0]);
      }
      getProfilesInit();
    });
    
    return (
        <> 
        {company ? (
            <div>{company.companyName}</div>
        ): (
            <div>Company not found!</div>
        )}
        </>
    )
}

export default CompanyPage