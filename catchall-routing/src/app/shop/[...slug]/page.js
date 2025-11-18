export default async function ShopDetailsPage({params}){
    const myparams = await params
    return <h1>{JSON.stringify(myparams)}</h1>
}
