本书中，我们研究的向量都是指自由向量，为此，我们首先来介绍 **Euclid空间** .

## Euclid空间

我们首先介绍Euclid空间的基本性质.

### Euclid空间的基本性质

日常生活中，我们最常接触到的空间就属于Euclid空间，为了描述Euclid空间的性质，我们可以建立坐标系，其中，直角坐标系下对Euclid空间的各种性质描述最为简单，这里我们就建立直角坐标系. 

建立直角坐标系之后，Euclid空间中的每一个点就具有了坐标，在 $n$ 维Euclid空间中，一个点 $\bs x$ 的坐标由 $n$ 个实数确定，记作 $(x_1,x_2,\dots,x_n)$ ，会发现在 $n$ 维Euclid空间中，两点的距离满足

$$
\rho(\bs x,\bs y)=\sqrt{\sum^n_{i=1}(x_i-y_i)^2}
$$

可见，两点间距离具有以下性质:

- $\rho(\bs x,\bs y)\ge0$ (非负性)
- $\rho(\bs x,\bs y)=\rho(\bs y,\bs x)$ (对称性)
- $\rho(\bs x,\bs z)\le\rho(\bs x,\bs y)+\rho(\bs y,\bs z)$ (三角不等式)

有了距离，我们就可以在Euclid空间中表示并使用向量.

### Euclid空间中的向量

向量是一类既有大小又有方向的量，在Euclid空间中，我们可以使用有向线段来表示向量，这样一来，有向线段的长度表示向量的大小，有向线段的方向表示向量的方向. 以 $A$ 为起点 $B$ 为终点的有向线段所代表的向量记为 $\overrightarrow{AB}$ ，另一种记法是直接使用黑体字母表示向量，如 $\bs x\text{，}\bs F$ 等，向量 $\bs a$ 的大小称作 $\bs a$ 的 **模** (或 **长度**，**范数** )，记作 $\Vert\bs a\Vert$ . 

由于Euclid空间是均匀平直的，有向线段可以任意平移而不改变大小和方向，这使得我们可以不考虑向量的起点位置，将所有向量的起点平移到原点，这种向量就叫做 **自由向量** ，是本书中几何部分的基础，它只存在于线性空间，Euclid空间就是一种线性空间，后文中所有的讨论都基于 $\mathbb{R}^3$ 和 $\mathbb{R}^2$ 这两个Euclid空间，也就是平直空间和平面. 

## 向量的坐标表示

在把起点统一平移到原点之后，向量与其终点就是一一对应的了，我们可以用终点的坐标来表示一个向量，如果终点是 $M$ ，可以记为 $\overrightarrow{OM}=\{x,y,z\}$ 或 $\overrightarrow{OM}=(x,y,z)$ ，称为向量 $\overrightarrow{OM}$ 的坐标，以下是几种比较特殊的向量:

- 模长为 $0$ 的向量称作 **零向量** ，记作 $\bs 0$ ，其坐标为 $\{0,0,0\}$ ，方向是任意的
- 模长为 $1$ 的向量称作 **单位向量** ，与非零向量 $\bs a$ 同方向的单位向量记作 $\bs a^\circ$ ，在三维空间直角坐标系中，常常把沿 $x$ 轴、 $y$ 轴、 $z$ 轴正方向的单位向量分别记作 $\bs i,\bs j,\bs k$ ，统称 **基本坐标向量** ，坐标分别为 $\{1,0,0\}\text{，}\{0,1,0\}\text{，}\{0,0,1\}$ ，显然它们两两垂直
- 模长为 $\Vert\bs a\Vert$ ，方向与 $\bs a$ 相反的向量称作 $\bs a$ 的 **负向量** ，记作 $-\bs a$ 

按照之前对距离的定义，我们不难知道，对于向量 $\bs a=\{x,y,z\}$ ，其长度 $\Vert\bs a\Vert$ 为

$$
\Vert\bs a\Vert=\sqrt{x^2+y^2+z^2}
$$

也就是向量 $\bs a$ 终点到原点 $O$ 的距离. 

## 向量的运算

### 向量的加减与数乘

向量之间可以进行运算，其中加法、减法和数乘的运算规则与实数运算类似，令 $\bs a=\{x_1,y_1,z_1\}\text{，}\bs b=\{x_2,y_2,z_2\}$ ，那么

- $\bs a\pm\bs b=\{x_1\pm x_2,y_1\pm y_2,z_1\pm z_2\}$
- $\lambda\bs a=\{\lambda x_1,\lambda y_1,\lambda z_1\}$

从几何意义上看，两个向量相加相当于两向量首尾相接，结果是从起点到终点的向量，两向量相减相当于第一个向量加上第二个向量的负向量，数乘 $\lambda$ 相当于把一个向量伸长 $\lambda$ 倍，如果 $\lambda\lt0$ 就要把向量反向

如果用图解表示是这样的：

向量加法
![video](VectorAddition.mp4)

向量减法
![video](VectorSubtraction.mp4)

向量数乘
![video](ScalarMultiplication.mp4)

### 向量的内积、外积、混合积

加减与数乘是常见的向量运算，但是这几种运算并没有体现出向量作为数学工具的优越性，做3次加法、减法、乘法可以完全替代这三种运算的功能，而内积、外积和混合积是向量所特有的运算，也是向量的优越性所在.

以下定义 $\bs a=\{x_1,y_1,z_1\}\text{，}\bs b=\{x_2,y_2,z_2\}\text{，}\bs c=\{x_3,y_3,z_3\}$ 

**内积** 在几何上被定义为 $\bs{a}\cdot\bs{b}=\Vert\bs a\Vert\Vert\bs b\Vert \cos(\bs a,\bs b)$ ，其中 $(\bs a,\bs b)$ 为 $\bs a$ 和 $\bs b$ 的夹角，可见，内积的几何意义是 $\bs a$ 在 $\bs b$ 方向的投影向量模长与 $\Vert\bs b\Vert$ 的乘积.

根据这一定义，显然，内积满足

- 交换律 $\bs a\cdot\bs b=\bs b\cdot\bs a$ 
- 对数乘的结合律 $(\lambda\bs a)\cdot\bs b=\lambda(\bs a\cdot\bs b)=\bs a\cdot(\lambda\bs b)$ 

根据其几何意义，内积也满足

- 对加法的分配律 $\bs a\cdot(\bs b+\bs c)=\bs a\cdot\bs b+\bs a\cdot\bs c$ 

我们把 $\bs a$ 分解为基本坐标向量的组合，可以得到 $\bs a=x_1\bs i+y_1\bs j+z_1\bs k$ ，同理分解 $\bs b$ ，这样一来，就有

$$\bs a\cdot\bs b=(x_1\bs i+y_1\bs j+z_1\bs k)\cdot(x_2\bs i+y_2\bs j+z_2\bs k)$$

由于基本坐标向量都是单位向量且两两垂直，很容易得到

$$\bs a\cdot\bs b=x_1x_2+y_1y_2+z_1z_2$$

这就是 **向量内积的坐标表示** ，观察这个表达式，会发现它可以自然的推广到 $n$ 维向量，如果把一个数视作一维向量的话，内积就是乘法的自然延伸.

不难发现，两个最基本的几何量——长度和角度都可以用内积来表示

- 长度 $\Vert\bs a\Vert=\sqrt{\bs a\cdot\bs a}=\sqrt{\bs a^2}$ 
- 角度 $(\bs a,\bs b)=\arccos\dfrac{\bs a\cdot\bs b}{\Vert\bs a\Vert\Vert\bs b\Vert}$ 

这说明，只要有内积，就可以研究空间中各种几何形的性质，实际上，内积是Euclid空间的重要特征之一，在研究高维Euclid空间时，由于无法直观想象高维Euclid空间，我们反而要用内积的坐标表示来定义长度和角度，而不是用长度和角度来定义内积.

> [!note]
> 实际上，真正严谨的定义Euclid空间的路线是这样的
> 
> 1. 用纯代数手段定义向量
> 2. 引入加法和数乘，定义线性空间
> 3. 引入内积，定义长度和角度
> 4. 根据线性空间的基定义维数，并要求维数有限

内积衡量了长度与角度，与之相对的， **外积** 衡量了面积，而且是 **有向面积** 

一个平面 $\Sigma$ 会把空间分为两个区域 $A$ 和 $B$ ，显然，从 $A$ 向 $B$ 穿过这个面与从 $B$ 向 $A$ 穿过这个面是不一样的，为了表示这种区别，我们给面赋予了方向，这就是有向面积.

外积是从两个向量得到一个向量的运算，其几何定义是 $\Vert\bs a\times\bs b\Vert=\Vert\bs a\Vert\Vert\bs b\Vert\sin(\bs a,\bs b)$ ，方向满足从 $\bs a$ 到 $\bs b$ 的 **右手定则** ，可见，外积 $\bs a\times\bs b$ 的模长就是 $\bs a$ 和 $\bs b$ 张成的平行四边形的面积，方向就代表该面积的方向.

==此处应有视频*1==

根据几何定义可以知道，外积也满足一定的运算律

- 反交换律 $\bs a\times\bs b=-\bs b\times\bs a$ 
- 对数乘的结合律 $(\lambda\bs a)\times\bs b=\lambda(\bs a\times\bs b)=\bs a\times(\lambda\bs b)$ 
- 对加法的分配率 $\bs a\times(\bs b+\bs c)=\bs a\times\bs b+\bs a\times\bs c$ 

根据这些运算律，仿照推导内积坐标表示的方法，可以得到

$$\bs a\times\bs b=\begin{vmatrix}\bs i&\bs j&\bs k\\x_1&y_1&z_1\\x_2&y_2&z_2\end{vmatrix}$$

这就是 **外积的坐标表示** ，结合线性代数的知识，可以很自然的从这个表达式推导出上述运算律. 

与内积不同，外积的坐标表示不能自然的推广到 $n$ 维，所以外积是三维空间特有的向量运算，这不难理解：只有三维空间中，一个平面才有唯一的法向，在更高维度，一个平面与无数个方向垂直，不能唯一确定一个向量. 

> [!note]
> 这并不是说高维空间中没有有向面积，实际上，高位空间中也有有向面积，有向面积的方向就是它自己，不是什么别的，只是在三维空间中，除去平面的两个维度恰好剩下一个方向，可以与有向面积的方向一一对应，这才用向量来表示有向面积的方向.

有时我们会在二维空间中做外积，那实际上是添加了一个维度，由于外积结果一定垂直于原本的二维平面，我们可以把方向用正负号表示，这样得到的标量就是二维外积的结果，用数学语言来表达就是

$$\begin{gathered}\{x_1,y_1,0\}\times\{x_2,y_2,0\}=\begin{vmatrix}\bs i&\bs j&\bs k\\x_1&y_1&0\\x_2&y_2&0\end{vmatrix}=\{0,0,x_1y_2-x_2y_1\}\\[2ex]\therefore\text{define}\quad\{x_1,y_1\}\times\{x_2,y_2\}=\begin{vmatrix}x_1&y_1\\x_2&y_2\end{vmatrix}=x_1y_2-x_2y_1\end{gathered}$$

可见只有第三维分量非零，故将其作为二维外积的结果，代表了两个平面向量张成的平行四边形的面积.

把内积和外积组合起来，可以得到一种三元运算—— **混合积** ，符号记为 $[\bs a\bs b\bs c]$ ，满足

$$[\bs a\bs b\bs c]=\bs a\cdot(\bs b\times\bs c)=\begin{vmatrix}x_1&y_1&z_1\\x_2&y_2&z_2\\x_3&y_3&z_3\end{vmatrix}$$

这就是 **混合积的坐标表示** ，其几何意义为 $[\bs a\bs b\bs c]=\pm V$ ，其中 $V$ 是 $\bs a,\bs b,\bs c$ 张成的平行六面体的体积， $\bs a,\bs b,\bs c$ 满足右手法则时取 $+$ ，否则取 $-$ .

==此处应有视频*1==

根据坐标表示，可以发现混合积具有如下性质

$$[\bs a\bs b\bs c]=[\bs c\bs a\bs b]=[\bs b\bs c\bs a]=-[\bs a\bs c\bs b]=-[\bs b\bs a\bs c]=-[\bs c\bs b\bs a]$$

几何上，混合积有这种性质是因为以上各个混合积对应着相同的平行六面体.

> [!note]
> 也可以从另一种视角来看待混合积，我们已知 $\bs a\times\bs b=\begin{vmatrix}\bs i&\bs j&\bs k\\x_1&y_1&z_1\\x_2&y_2&z_2\end{vmatrix}$ 的模长为 $\bs a,\bs b$ 张成的平行四边形的面积，自然可以猜想，在四维Euclid空间中，若第四维的单位向量为 $\bs l$ ，则 $\begin{vmatrix}\bs i&\bs j&\bs k&\bs l\\x_1&y_1&z_1&w_1\\x_2&y_2&z_2&w_2\\x_3&y_3&z_3&w_3\end{vmatrix}$ 就是 $\bs a_i=\{x_i,y_i,z_i,w_i\}\text{，}i=1,2,3$ 张成的平行六面体的三维体积，模仿二维外积的定义方法，令所有 $w_i=0$ ，即求得该行列式的结果为 $\{0,0,0,[\bs a\bs b\bs c]\}$ ，可见其第四维分量恰好是 $\bs a,\bs b,\bs c$ 的混合积.

## 向量的位置关系

向量的位置关系分为垂直，平行，夹角，共面，本节主要关注这些位置关系对应的代数性质.

### 垂直

向量垂直也就是夹角为 $\dfrac\pi2$ ，我们将 $\bs a$ 垂直于 $\bs b$ 记作 $\bs a\bot\bs b$ ，对应的代数关系为 $\bs a\cdot\bs b=\Vert\bs a\Vert\Vert\bs b\Vert\cos(\bs a,\bs b)=0$ .

### 平行

向量平行也就是两向量成比例，或者说张成的平行四边形面积为 $0$ ，我们将 $\bs a$ 与 $\bs b$ 平行记作 $\bs a\parallel\bs b$ ，对应的代数关系为 $\bs a\times\bs b=\bs 0$ 或 $\bs a=\lambda\bs b$ ，其中 $\bs b\neq\bs 0$ .

### 夹角

如果两个向量既不平行也不垂直，可以求夹角， $(\bs a,\bs b)=\arccos\dfrac{\bs a\cdot\bs b}{\Vert\bs a\Vert\Vert\bs b\Vert}$ .

### 共面

共面是一种针对三个及以上向量的关系，三个向量共面意味着他们张成的平行六面体体积为 $0$ ，对应的代数关系为 $[\bs a\bs b\bs c]=0$ ，也就是行列式 $\begin{vmatrix}x_1&y_1&z_1\\x_2&y_2&z_2\\x_3&y_3&z_3\end{vmatrix}=0$ ，这意味着 $\bs a,\bs b,\bs c$ 线性相关，实际上就是高中阶段学过的 $\bs c=\lambda\bs a+\mu\bs b$ ，则 $\bs a,\bs b,\bs c$ 共面.

END