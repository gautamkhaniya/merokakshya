// Helper function to convert sanity values to prisma enum values
export function convertSanityValueToPrismaValue(
  type: "university" | "degree" | "year" | "semester",
  sanityValue: string,
): string | null {
  const conversionMaps = {
    university: {
      medicaps: "MEDICAPS",
      ips: "IPS",
    },
    degree: {
      "btech-cse": "BTECH_CSE",
      "btech-it": "BTECH_IT",
    },
    year: {
      "1st-year": "FIRST_YEAR",
      "2nd-year": "SECOND_YEAR",
      "3rd-year": "THIRD_YEAR",
      "4th-year": "FOURTH_YEAR",
    },
    semester: {
      "1st-semester": "FIRST_SEMESTER",
      "2nd-semester": "SECOND_SEMESTER",
      "3rd-semester": "THIRD_SEMESTER",
      "4th-semester": "FOURTH_SEMESTER",
      "5th-semester": "FIFTH_SEMESTER",
      "6th-semester": "SIXTH_SEMESTER",
      "7th8th-semester": "SEVENTHEIGHTH_SEMESTER",
      "Pas-sed": "PASSED",
    },
  };

  return (
    conversionMaps[type][
      sanityValue as keyof (typeof conversionMaps)[typeof type]
    ] || null
  );
}

// Helper function to convert prisma enum values to display format
export function convertPrismaValueToDisplayFormat(
  type: "university" | "degree" | "year" | "semester",
  prismaValue: string,
): string {
  const displayMaps = {
    university: {
      MEDICAPS: "IAAS",
      IPS: "Other institutions",
    },
    degree: {
      BTECH_CSE: "Agriculture",
      BTECH_IT: "Other Degree",
    },
    year: {
      FIRST_YEAR: "1st Year",
      SECOND_YEAR: "2nd Year",
      THIRD_YEAR: "3rd Year",
      FOURTH_YEAR: "4th Year",
    },
    semester: {
      FIRST_SEMESTER: "1st Semester",
      SECOND_SEMESTER: "2nd Semester",
      THIRD_SEMESTER: "3rd Semester",
      FOURTH_SEMESTER: "4th Semester",
      FIFTH_SEMESTER: "5th Semester",
      SIXTH_SEMESTER: "6th Semester",
      SEVENTHEIGHTH_SEMESTER: "7th/8th Semester",
      PASSED: "Passed",
    },
  };

  return (
    displayMaps[type][prismaValue as keyof (typeof displayMaps)[typeof type]] ||
    prismaValue
  );
}
