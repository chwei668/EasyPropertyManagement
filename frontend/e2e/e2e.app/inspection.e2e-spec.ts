import { $, browser, by, element, By } from 'protractor';
import { async } from '../../node_modules/@types/q';

describe('Property Management Tests', async () => {

  beforeEach(async () => {
    await browser.get('/api/properties');
    console.log('Got it');
    console.log('Opening /api/properties');
  });

  it('should open the property page', async () => {
    const brandElement = $('.navbar-brand');
    const brandText = await brandElement.getText();
    expect(brandText).toEqual('Welcome to Easy Property Management!');
  });

  it('should have a Home link which is clickable', async () => {
    const homeLink = element(by.linkText('Home'));
    expect (homeLink.isPresent()).toBeTruthy();
  });

  it('Add New button should be available', async () => {
    const editButton = element (by.buttonText('Add New'));
    expect (editButton.isPresent()).toBeTruthy();
  });

  it('should have a refresh button which is clickable', async () => {
    const refreshButton = element(by.cssContainingText('button', '[class="fa fa-refresh"]'));
    refreshButton.click();
  });

  it('should have a Properties header in the grid view', async () => {
    const propertiesHeader = $('.panel-heading');
    const headerText = await propertiesHeader.getText();
    expect(headerText).toEqual('Properties');
  });

  it('Name and Address should be diplayed at grid view', async () => {
    const nameAddress = element (by.cssContainingText('Name', 'Address'));
    expect (nameAddress.isPresent()).toBeTruthy();
  });

});

