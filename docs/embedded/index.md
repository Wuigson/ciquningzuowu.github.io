# 嵌入式学习建议
# 嵌入式软件开发学习路线
---

## 阶段一：基础筑基

### 1. 51单片机学习（推荐STC89C52RC）
- **开发环境**：Keil 5
- **核心技能**：
  - 独立按键扫描与数码管动态显示
  - 定时器实现精准延时（非`delay()`）
  - 串口通信打印调试信息
  - 按键长按、短按
  - 
- **实战项目**：  
  电子密码锁（含EEPROM存储）
- 推荐课程：b站江科大51单片机
https://www.bilibili.com/video/BV1Mb411e7re/?spm_id_from=333.1387.favlist.content.click&vd_source=0cd627cda29255509e8b97306787e55c
### 2. PCB画板学习
- 学习环境：嘉立创EDA
- 推荐课程：Expert电子实验室
https://www.bilibili.com/video/BV1At421h7Ui/?spm_id_from=333.1387.favlist.content.click&vd_source=0cd627cda29255509e8b97306787e55c
---

## 阶段二：进阶
### 1. STM32开发体系（推荐STM32F103C8T6）
- **核心工具**：CubeMX图形化配置 + Keil5
- **开发模式**：
  - HAL库与寄存器开发对比
  - 中断优先级管理（NVIC）
- 优先学习标准库的使用，标准库学习完成后学习HAL库
- 推荐课程：

1.铁头山羊stm32标准库
https://www.bilibili.com/video/BV11X4y1j7si/?spm_id_from=333.1387.favlist.content.click&vd_source=0cd627cda29255509e8b97306787e55c

2.铁头山羊stm32HAL库
https://www.bilibili.com/video/BV16J4m1w7HB/?spm_id_from=333.1387.homepage.video_card.click&vd_source=0cd627cda29255509e8b97306787e55c
### 2. 核心外设深度掌握
- **关键外设**：
  | 外设 | 应用场景 |
  |---|---|
  | ADC | 多通道电压监测 |
  | PWM | 舵机/直流电机控制 |
  | DMA | 串口高效数据传输 |
  | 看门狗 | 系统故障恢复 |


---

## 阶段三：控制算法与软硬件协同
### PID控制专题
#### 1. 数学基础（离散化推导）
- **算法公式**：

- 位置式PID：u(k) = Kpe(k) + Ki∑e(j) + Kd*(e(k)-e(k-1))
- 增量式PID：Δu(k) = Kp*(e(k)-e(k-1)) + Kie(k) + Kd(e(k)-2e(k-1)+e(k-2))


#### 2. 参数整定方法
- **调参技巧**：
1. 临界比例法（Ziegler-Nichols）
2. 试凑法调整曲线（关注超调/响应时间）
3. 先调Kp→再调Ki→最后Kd

#### 3. STM32实现方案
```c
// 增量式PID示例代码
typedef struct {
float Kp, Ki, Kd;
float err, last_err, prev_err;
} PID_Controller;

float PID_Update(PID_Controller *pid, float setpoint, float measured) {
pid->err = setpoint - measured;
float delta = pid->Kp*(pid->err - pid->last_err) 
           + pid->Ki*pid->err
           + pid->Kd*(pid->err - 2*pid->last_err + pid->prev_err);
pid->prev_err = pid->last_err;
pid->last_err = pid->err;
return delta;
}

