import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessageService = TestBed.get(MessageService);
    expect(service).toBeTruthy();
  });

  it('should return true', () => {
    expect(true).toBe(true);
  });

  it('add should add message to the last position', () => {
    const service: MessageService = TestBed.get(MessageService);
    service.add('test1');
    service.add('test2');
    expect(service.messages.length).toBe(2);
    expect(service.messages[service.messages.length - 1]).toBe('test2');
  });

  it('clear should clean messages', () => {
    const service: MessageService = TestBed.get(MessageService);
    service.clear();
    expect(service.messages.length).toBe(0);
    service.add('test1');
    service.clear();
    expect(service.messages.length).toBe(0);
  });
});
