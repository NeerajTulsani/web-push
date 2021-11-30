self.addEventListener('push', e => {
    const data = e.data.json()
    self.registration.showNotification(data, {
      body: 'sent by neeraj tulsani' 
    });
  });
