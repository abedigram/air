"use client";
import {useEffect, useState} from "react";
import {
    androidAsyncRequest,
    androidRequest,
    AndroidPermission,
    AndroidLocation,
    AndroidError
} from "@/app/AndroidBridge";

type weather = {
    currentConditions: {
        temp: number;
    };
};

export default function Home() {
    const [msg, setMsg] = useState('nist')

    useEffect(() => {
        setMsg(
            androidRequest<number>('getWrapperVersionCode')
        )
    }, []);

    const checkPermission = () => {
        const status = androidRequest<AndroidPermission>('locationPermissionStatus')
        if (status == "GRANTED") {
            androidRequest('toast',  'granted')
            setMsg("granted")
        }
        else if (status == "BLOCKED")
            androidRequest('openPermissionSettings')
        else
            androidRequest('requestLocationPermission')
    }

    const getCurrentLocation = () => androidAsyncRequest<AndroidLocation>('asyncGetPreciseLocation')
        .then((l) => setMsg(l.latitude.toString()))
        .catch((m: string) => setMsg(m))

    const getLastLocation = () => androidAsyncRequest<AndroidLocation>('asyncGetFastLocation')
        .then((l) => setMsg(l.latitude.toString()))
        .catch(setMsg)

    return <main className="flex min-h-screen flex-col items-center justify-between p-24 text-[2rem]">
        {msg}
        {/*<button onClick={() => run().then(setMsg)}>run</button>*/}
        <button onClick={checkPermission}>check permission</button>
        <button onClick={getLastLocation}>get last locaiton</button>
        <button onClick={getCurrentLocation}>get current location</button>
    </main>
}

/* begin network request */
// const [loc, setLoc] = useState<GeolocationCoordinates>()
// const {data: wData} = useGetVisualCrossingWebServicesRestServicesTimelineByLocationQuery({
//     location: `${loc?.latitude}, ${loc?.longitude}`,
//     key: "J45TVQWNGNQCWYYZJGKLVTCXW",
// });
// const {data: mData} = useGetReverseQuery({
//     "x-api-key": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjAzODgxNmUwOTgwNTE1ZDc2NDJjMjcyZDllYjk1ZWUwMTVkMWZlZjZhNDRkNGJkMzgzNGE4ZTA5YmJhMWY5ZGQzMGUxZmZlN2Q4ZDUzZWZkIn0.eyJhdWQiOiIyMTc3NiIsImp0aSI6IjAzODgxNmUwOTgwNTE1ZDc2NDJjMjcyZDllYjk1ZWUwMTVkMWZlZjZhNDRkNGJkMzgzNGE4ZTA5YmJhMWY5ZGQzMGUxZmZlN2Q4ZDUzZWZkIiwiaWF0IjoxNjgwOTUyNjI1LCJuYmYiOjE2ODA5NTI2MjUsImV4cCI6MTY4MzU0NDYyNSwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.aCcyNFYaYDaOR0P1Q7hkSmdM8rs_5nx4wBUKJUgX07Q23nl1B_gPU40jNtsDTKI5l1J3QYBnkOmMVHLsfQ_WCen9vqEfBWHMGOvVP-K46vZY4GKkhkYxN8TW2pAXACUetGp-_i4GrU_YGvEdWxOmh92Xcyia59y-EtCVSG_2WI4HtCPIBxSuQj8eLSQCiHssbFPCZMe10XiRNe3R_npbOv3teHRSxMVXb2FKduWmfUjRcuRToOPc7TOxyfHIGKxDKS44jwejGyiNSglbnm2Luh5x_P03j48qqQEyptQ23eaHVUcyZMnhtZKl1OxDNeJfATvvNj6vGBB0wUe1dgx36A",
//     lat: loc?.latitude ?? 0.0,
//     lon: loc?.longitude ?? 0.0,
// });
/* end network request */