self.addEventListener('push', e => {
    const data = e.data;
    self.registration.showNotification(data, {
      body: 'sent by neeraj tulsani' 
    });
  });
