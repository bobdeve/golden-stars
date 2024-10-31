import React from "react";
import useFetchData from "./useFetchData";

export default function FetchData() {
  const { data, loading, error } = useFetchData("golden");
  const isDataAvailable = data.length > 0;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {isDataAvailable && <img src={data[0].landingpic} alt="Landing Pic" />}
    </div>
  );
}
