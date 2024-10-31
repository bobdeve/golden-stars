import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    // Convert message to lowercase for case-insensitive matching
    const lowercasedMessage = message.toLowerCase();

    if (
      lowercasedMessage.includes("scholarships") ||
      lowercasedMessage.includes("scholarship") ||
      lowercasedMessage.includes("scholar") ||
      lowercasedMessage.includes("scolarships") || // typo
      lowercasedMessage.includes("scolarship") ||  // typo
      lowercasedMessage.includes("scolar")         // typo
    ) {
      actions.handleSingleScho();
    } else if (
      lowercasedMessage.includes("hello") ||
      lowercasedMessage.includes("hi") ||
      lowercasedMessage.includes("helo") || // typo
      lowercasedMessage.includes("hy") ||
      lowercasedMessage.includes("hye") ||
      lowercasedMessage.includes("hallo") ||
      lowercasedMessage.includes("selam") ||
      lowercasedMessage.includes("helloo") || // typo
      lowercasedMessage.includes("heloo")    // typo
    ) {
      actions.handleHello();
    } else if (
      lowercasedMessage.includes("registration") ||
      lowercasedMessage.includes("registrations") ||
      lowercasedMessage.includes("register") ||
      lowercasedMessage.includes("applications") ||
      lowercasedMessage.includes("applying") ||
      lowercasedMessage.includes("apply") ||
      lowercasedMessage.includes("admissions") ||
      lowercasedMessage.includes("admission") ||
      lowercasedMessage.includes("tuition") ||
      lowercasedMessage.includes("tuitions") ||
      lowercasedMessage.includes("fees") ||
      lowercasedMessage.includes("fee") ||
      lowercasedMessage.includes("college") ||
      lowercasedMessage.includes("colleges") ||
      lowercasedMessage.includes("collage") || // typo
      lowercasedMessage.includes("colleg") ||  // typo
      lowercasedMessage.includes("admissons") || // typo
      lowercasedMessage.includes("admissin") || // typo
      lowercasedMessage.includes("tution")      // typo
    ) {
      actions.handleRegi();
    } else if (
      lowercasedMessage.includes("program") ||
      lowercasedMessage.includes("programs") ||
      lowercasedMessage.includes("fields") ||
      lowercasedMessage.includes("field") ||
      lowercasedMessage.includes("department") ||
      lowercasedMessage.includes("departments") ||
      lowercasedMessage.includes("class") ||
      lowercasedMessage.includes("classes") ||
      lowercasedMessage.includes("institution") ||
      lowercasedMessage.includes("institutions") ||
      lowercasedMessage.includes("prgram") || // typo
      lowercasedMessage.includes("prgrams") || // typo
      lowercasedMessage.includes("feld") || // typo
      lowercasedMessage.includes("departmant") || // typo
      lowercasedMessage.includes("instituton") // typo
    ) {
      actions.handlePro();
    } else if (
      lowercasedMessage.includes("location") ||
      lowercasedMessage.includes("locations") ||
      lowercasedMessage.includes("where") ||
      lowercasedMessage.includes("map") ||
      lowercasedMessage.includes("maps") ||
      lowercasedMessage.includes("loction") || // typo
      lowercasedMessage.includes("locatons") || // typo
      lowercasedMessage.includes("wher")       // typo
    ) {
      actions.handleLocation();
    } else if (
      lowercasedMessage.includes("aid") ||
      lowercasedMessage.includes("financial") ||
      lowercasedMessage.includes("financials") ||
      lowercasedMessage.includes("help") ||
      lowercasedMessage.includes("helps") ||
      lowercasedMessage.includes("assistance") ||
      lowercasedMessage.includes("poor") ||
      lowercasedMessage.includes("financal") || // typo
      lowercasedMessage.includes("financals") || // typo
      lowercasedMessage.includes("assisstance") // typo
    ) {
      actions.handleScholar();
    } else if (
      lowercasedMessage.includes("courses") ||
      lowercasedMessage.includes("course") ||
      lowercasedMessage.includes("syllabus") ||
      lowercasedMessage.includes("curriculum") ||
      lowercasedMessage.includes("coursses") || // typo
      lowercasedMessage.includes("syllabuss") || // typo
      lowercasedMessage.includes("curiculum")    // typo
    ) {
      actions.handleCourses();
    } else if (
      lowercasedMessage.includes("faculty") ||
      lowercasedMessage.includes("professors") ||
      lowercasedMessage.includes("teachers") ||
      lowercasedMessage.includes("staff") ||
      lowercasedMessage.includes("instructors") ||
      lowercasedMessage.includes("faclty") || // typo
      lowercasedMessage.includes("profesors") || // typo
      lowercasedMessage.includes("teachrs")    // typo
    ) {
      actions.handleFaculty();
    } else if (
      lowercasedMessage.includes("schedule") ||
      lowercasedMessage.includes("timetable") ||
      lowercasedMessage.includes("calendar") ||
      lowercasedMessage.includes("dates") ||
      lowercasedMessage.includes("events") ||
      lowercasedMessage.includes("time") ||
      lowercasedMessage.includes("schedual") || // typo
      lowercasedMessage.includes("timetble") || // typo
      lowercasedMessage.includes("calander")    // typo
    ) {
      actions.handleSchedule();
    } else if (
      lowercasedMessage.includes("requirements") ||
      lowercasedMessage.includes("prerequisites") ||
      lowercasedMessage.includes("eligibility") ||
      lowercasedMessage.includes("criteria") ||
      lowercasedMessage.includes("qualification") ||
      lowercasedMessage.includes("requiremnts") || // typo
      lowercasedMessage.includes("prerequesites") || // typo
      lowercasedMessage.includes("eligiblity") || // typo
      lowercasedMessage.includes("criterias")    // typo
    ) {
      actions.handleRequirements();
    } else if (
      lowercasedMessage.includes("payment") ||
      lowercasedMessage.includes("payments") ||
      lowercasedMessage.includes("pay") ||
      lowercasedMessage.includes("payment plan") ||
      lowercasedMessage.includes("payment plans") ||
      lowercasedMessage.includes("paymnt") || // typo
      lowercasedMessage.includes("paymnts") || // typo
      lowercasedMessage.includes("paymentplan") // typo
    ) {
      actions.handlePayment();
    } else if (
      lowercasedMessage.includes("support") ||
      lowercasedMessage.includes("supports") ||
      lowercasedMessage.includes("technical support") ||
      lowercasedMessage.includes("helpdesk") ||
      lowercasedMessage.includes("tech support") ||
      lowercasedMessage.includes("suport") || // typo
      lowercasedMessage.includes("supprt") || // typo
      lowercasedMessage.includes("techsupport") // typo
    ) {
      actions.handleSupport();
    } else if (
      lowercasedMessage.includes("library") ||
      lowercasedMessage.includes("libraries") ||
      lowercasedMessage.includes("book") ||
      lowercasedMessage.includes("books") ||
      lowercasedMessage.includes("libary") || // typo
      lowercasedMessage.includes("libray") || // typo
      lowercasedMessage.includes("libaries") // typo
    ) {
      actions.handleLibrary();
    } else if (
      lowercasedMessage.includes("hostel") ||
      lowercasedMessage.includes("hostels") ||
      lowercasedMessage.includes("dorm") ||
      lowercasedMessage.includes("dormitory") ||
      lowercasedMessage.includes("accommodation") ||
      lowercasedMessage.includes("hostl") || // typo
      lowercasedMessage.includes("dorms") || // typo
      lowercasedMessage.includes("acommodation") // typo
    ) {
      actions.handleHostel();
    } else if (
      lowercasedMessage.includes("transport") ||
      lowercasedMessage.includes("transportation") ||
      lowercasedMessage.includes("bus") ||
      lowercasedMessage.includes("buses") ||
      lowercasedMessage.includes("transprt") || // typo
      lowercasedMessage.includes("transportion") // typo
    ) {
      actions.handleTransport();
    } else {
      actions.handleOther();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
