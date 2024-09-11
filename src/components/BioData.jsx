import React from 'react'

function BioData(props) {
  return (
    <div className='single-bio-data'>
    <table>
    <thead>
      <tr>
        <th colSpan={2}> BioData Of {props.name} </th>
      </tr>
    </thead>
      <tbody> 
      </tbody>

        <tr>
        <td className='heading'>
          Name of The Person: 
        </td>
        <td>
         {props.name}
        </td>
        </tr>
        

        <tr>
        <td className='heading'>
          Email Address: 
        </td>
        <td>
          {props.email}
        </td>
        </tr>
        
        <tr>
        <td className='heading'>
         Phone Number: 
        </td>
        <td>
          {props.phone}
        </td>
        </tr>
        
        <tr>
        <td className='heading'>
         GitHub Handle: 
        </td>
        <td>
          {props.github}
        </td>
        </tr>
        
        <tr>
        <td className='heading'>
         Interests:  
        </td>
        <td>
          <ul>
            {props?.interests?.map((interest) => (
              <li key={interest}> {interest} </li>
            ))}
          </ul>
        </td>
        </tr>
        
        <tr>
        <td className='heading'>
         Skils:  
        </td>
        <td>
          <ul>
           {props?.skils?.map((skil) => (
            <li key={skil}> {skil} </li>
           ))}
          </ul>
        </td>
        </tr>
        
        <tr>
        <td className='heading'>
         Social Media:  
        </td>
        <td>
          <ul>
            {props?.socials?.map(social =>(
              <li key={social.platform}>{social.handle}</li>
            ))}          
          </ul>
        </td>
        </tr>
        
    </table>
    </div>

  )
}

export default BioData