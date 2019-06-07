import { TestBed, inject } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService]
    });
    service = TestBed.get(MessageService);
  });

  it('should be created', inject([MessageService], (service: MessageService) => {
    expect(service).toBeTruthy();
  }));

  it('should add item and be the last', () => {
    const items = ['test1', 'test2', 'test3'];

    items.forEach(item => service.add(item));
    const length = service.messages.length;
    expect(length).toBe(3);
    expect(service.messages[length - 1]).toBe(items[length - 1]);
  });

  it('should delete all items', () => {
    const items = ['test1', 'test2', 'test3'];

    service.clear();
    expect(service.messages.length).toBe(0);

    items.forEach(item => service.add(item));
    service.clear();
    expect(service.messages.length).toBe(0);
  });
});
