import { Counter } from "@/app/patterns/clientusesserver/components/Counter";
import CounterHeader from "@/app/patterns/clientusesserver/components/CounterHeader";


export default function ServerPage() {
    return <>
        {/* <Counter /> */}
        {/* Pass Server Component as Prop */}
        <Counter>
            <CounterHeader/>
        </Counter>
    </>
}