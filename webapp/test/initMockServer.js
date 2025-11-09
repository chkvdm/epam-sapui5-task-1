sap.ui.define(['../localService/mockserver'], (mockserver) => {
  'use strict';

  mockserver.init();

  sap.ui.require(['sap/ui/core/ComponentSupport']);
});

// import mockserver from '../localService/mockserver.js';
// import 'sap/ui/core/ComponentSupport';

// mockserver.init();
