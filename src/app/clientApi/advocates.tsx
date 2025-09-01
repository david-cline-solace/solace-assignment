export interface Advocate {
  firstName: string
  lastName: string
  city: string
  degree: string
  specialties: string[]
  yearsOfExperience: number
  phoneNumber: number
}


export async function getAdvocates(): Promise<Advocate[]|null> {
  'use cache' // TODO: make sure this actually caches the data. (aka I didn't have a chance to test it when doing this project :))

  try {
    console.log("fetching advocates...");
    const advocateData = await fetch("/api/advocates").then(async (response) => {
      return await response.json().then((jsonResponse) => {
        return jsonResponse.data
      })
    })
    return advocateData || []
  } catch(e) {
    console.error("unable to pull advocate data!")
    return null
  }
}
