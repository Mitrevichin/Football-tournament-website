export function csvParser(csvDoc) {
  const [headerLine, ...rows] = csvDoc.split('\n'); // Split into header and rows
  const headers = headerLine.split(','); // Split header into columns

  return rows.map(row => {
    const values = row.split(','); // Split row into values
    const obj = {}; // Create an empty object

    for (let i = 0; i < headers.length; i++) {
      const value = values[i] ? values[i].trim() : ''; // Check if value exists, else assign empty string
      obj[headers[i].trim()] = value; // Assign key-value pairs
    }

    return obj;
  });
}
