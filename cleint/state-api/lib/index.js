class DataApi {
  constructor(rowData) {
    this.rowData = rowData;
  }
  mapIntoObject(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }

  getEvents() {
    return this.mapIntoObject(this.rowData.events);
  }

  getOrganizers() {
    return this.mapIntoObject(this.rowData.organizers);
  }
}

export default DataApi;