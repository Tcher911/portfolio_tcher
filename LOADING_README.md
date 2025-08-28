# Loading System สำหรับ Portfolio TCHER

## ภาพรวม

ระบบ Loading ใหม่นี้แทนที่ Spinner ธรรมดาใน RouteGuard ด้วย loading screen ที่สวยงามและมี animation น่าสนใจ

## Components ที่สร้างขึ้น

### 1. LoadingScreen
- แสดงหน้า loading แยกต่างหาก
- มี progress bar แบบ animated
- แสดงชื่อ brand "TCHER" พร้อม tagline
- มี loading dots animation
- รองรับ responsive design และ dark theme

### 2. LoadingProvider
- จัดการ global loading state
- แสดง loading screen เมื่อเริ่มต้นเว็บไซต์
- สามารถเรียกใช้ loading ได้จากทุกที่ในแอป

### 3. LoadingExample
- ตัวอย่างการใช้งาน LoadingProvider
- แสดงปุ่มสำหรับทดสอบ loading screen

## การใช้งาน

### การใช้งานพื้นฐาน

```tsx
import { useLoading } from "@/components";

const MyComponent = () => {
  const { startLoading, completeLoading, isLoading } = useLoading();

  const handleAsyncOperation = async () => {
    startLoading();
    
    try {
      // ทำ async operation
      await someAsyncFunction();
    } finally {
      completeLoading();
    }
  };

  return (
    <Button onClick={handleAsyncOperation}>
      Start Operation
    </Button>
  );
};
```

### การใช้งานใน API calls

```tsx
const handleSubmit = async () => {
  startLoading();
  
  try {
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: JSON.stringify(data)
    });
    
    if (response.ok) {
      // Handle success
    }
  } catch (error) {
    // Handle error
  } finally {
    completeLoading();
  }
};
```

## Features

### ✅ Progress Bar
- แสดงความคืบหน้าการโหลดแบบ real-time
- มี shimmer effect
- Smooth transitions

### ✅ Branded Design
- แสดงชื่อ "TCHER" แบบ gradient text
- Tagline: "Design • Development • Innovation"
- สีและ style ที่สอดคล้องกับ brand

### ✅ Animations
- Fade in/out effects
- Bouncing dots
- Staggered animations
- Smooth transitions

### ✅ Responsive Design
- ทำงานได้ดีทั้งมือถือและเดสก์ท็อป
- ปรับขนาดตามหน้าจอ
- Touch-friendly

### ✅ Theme Support
- รองรับ light/dark theme
- Gradient backgrounds
- Adaptive colors

## การปรับแต่ง

### เปลี่ยนสีและ style
แก้ไขไฟล์ `LoadingScreen.module.scss`:

```scss
.loadingScreen {
  background: linear-gradient(135deg, #your-color-1 0%, #your-color-2 100%);
}

.brandText {
  background: linear-gradient(135deg, #your-text-color-1 0%, #your-text-color-2 100%);
}
```

### เปลี่ยนเวลา loading
แก้ไขไฟล์ `LoadingProvider.tsx`:

```tsx
// เปลี่ยนจาก 2000ms เป็นเวลาที่ต้องการ
setTimeout(() => {
  setIsLoading(false);
  setIsInitialized(true);
}, 3000); // 3 seconds
```

### เพิ่ม loading messages
แก้ไขไฟล์ `LoadingScreen.tsx`:

```tsx
const loadingMessages = [
  "Preparing your experience...",
  "Loading amazing content...",
  "Almost ready...",
  "Welcome to TCHER..."
];

const [currentMessage, setCurrentMessage] = useState(0);

// เปลี่ยนข้อความทุก 2 วินาที
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentMessage((prev) => (prev + 1) % loadingMessages.length);
  }, 2000);
  
  return () => clearInterval(interval);
}, []);
```

## การติดตั้ง

1. Components ทั้งหมดถูกสร้างเสร็จแล้ว
2. LoadingProvider ถูกเพิ่มใน `layout.tsx` แล้ว
3. สามารถใช้งานได้ทันที

## การทดสอบ

1. รีเฟรชหน้าเว็บไซต์ - จะเห็น loading screen แรก
2. ใช้ `LoadingExample` component เพื่อทดสอบ loading
3. เรียกใช้ `useLoading` hook ใน component อื่นๆ

## Performance

- Loading screen ใช้ CSS animations แทน JavaScript
- Minimal re-renders
- Optimized for mobile devices
- Lazy loading support

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers
- Progressive enhancement
