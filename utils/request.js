const apiDOMAIN = process.env.NEXT_PUBLIC_API_DOMAIN || null;

//fetch all properties
async function FetchProperty() {
    try {
        if(!apiDOMAIN) {
            return []
        }
        
        const res = await fetch(`${apiDOMAIN}/properties`);
        if (!res.ok) {
            throw new Error('Failed to fetch data!');
      }
        return res.json();
    } catch (error) {
        console.log(error);
        return []
    }
}

//fetch single property
async function FetchSingleProperty(id) {
    try {

        if(!apiDOMAIN) {
            return null;
        }
        
        const res = await fetch(`${apiDOMAIN}/properties/${id}`);
        if (!res.ok) {
            throw new Error('Failed to fetch data!');
        }
        return res.json();

    } catch (error) {

        console.log(error);
        return null;

    }
}
export { FetchProperty, FetchSingleProperty }