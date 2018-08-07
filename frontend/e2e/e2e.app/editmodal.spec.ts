import { $, browser, by, element, By } from 'protractor';

describe('Edit Property Module Test ', async () => {

  beforeEach(async () => {
    await browser.get('/api/properties');
    console.log('Got it');
    console.log('Opening /api/properties');
    const editButton = element (by.buttonText('Add New'));
    editButton.click();
    browser.wait(element(by.class('.modal-dialog')).isDisplayed, 5000);
  });

    it('should have Edit Property header on the modal', async () => {
      const modalHeader = $('.modal-header');
      expect (modalHeader.isPresent()).toBeTruthy();
    });

    it('should have Name and Address as Labels on the modal', async () => {
      const editModal = element(by.class('.modal-dialog'));
      expect (editModal.getText()).toContain('Name') ;
      expect (editModal.getText()).toContain('Address') ;
    });

    it('should have OK button on the modal', async () => {
      const okButton = element(by.buttonText('OK'));
      expect (okButton.isPresent()).toBeTruthy() ;
    });

    it('should have Cancel button on the modal', async () => {
      const cancelButton = element(by.buttonText('Cancel'));
      expect (cancelButton.isPresent()).toBeTruthy() ;
    });

    it('should be able to add new property', async () => {
      const inputName = element(by.css('.form-control:nth-child(1) input'));
      inputName.sendKeys('Name100');
      const inputAddress = element(by.css('.form-control:nth-child(2) input'));
      inputName.sendKeys('Address100');
      const okButton = element(by.buttonText('OK'));
      okButton.click();
      waits(5000);
      const NameAddress = element(by.cssContainingText('Name100', 'Address100'));
      expect (NameAddress.isPresent()).toBeTruthy();
    });

    it('should be able to add new property', async () => {
      const inputName = element(by.css('.form-control:nth-child(1) input'));
      inputName.sendKeys('Name100');
      const inputAddress = element(by.css('.form-control:nth-child(2) input'));
      inputName.sendKeys('Address100');
      const okButton = element(by.buttonText('OK'));
      okButton.click();
      waits(5000);
      const NameAddress = element(by.cssContainingText('Name100', 'Address100'));
      expect (NameAddress.isPresent()).toBeTruthy();
    });

    it('should be able to add new property', async () => {
      const inputName = element(by.css('.form-control:nth-child(1) input'));
      inputName.sendKeys('Name100');
      const inputAddress = element(by.css('.form-control:nth-child(2) input'));
      inputName.sendKeys('Address100');
      const okButton = element(by.buttonText('OK'));
      okButton.click();
      waits(5000);
      const NameAddress = element(by.cssContainingText('Name100', 'Address100'));
      expect (NameAddress.isPresent()).toBeTruthy();
    });

    it('When click Cancel button no data should be added', async () => {
      const inputName = element(by.css('.form-control:nth-child(1) input'));
      inputName.sendKeys('Name500');
      const inputAddress = element(by.css('.form-control:nth-child(2) input'));
      inputName.sendKeys('Address500');
      const cancelButton = element(by.buttonText('Cancel'));
      cancelButton.click();
      waits(5000);
      const NameAddress = element(by.cssContainingText('Name500', 'Address500'));
      expect (NameAddress.isPresent()).toBeFalsy();
    });
  });

