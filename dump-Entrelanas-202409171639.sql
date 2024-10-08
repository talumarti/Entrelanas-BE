PGDMP      '                |         
   Entrelanas    16.3    16.3 .               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                        0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            !           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            "           1262    16550 
   Entrelanas    DATABASE     �   CREATE DATABASE "Entrelanas" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Colombia.1252';
    DROP DATABASE "Entrelanas";
                postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                pg_database_owner    false            #           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   pg_database_owner    false    4            �            1259    16559 
   categorias    TABLE     v   CREATE TABLE public.categorias (
    categoria_id integer NOT NULL,
    descripcion character varying(50) NOT NULL
);
    DROP TABLE public.categorias;
       public         heap    postgres    false    4            �            1259    16558    categorias_id_seq    SEQUENCE     �   CREATE SEQUENCE public.categorias_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.categorias_id_seq;
       public          postgres    false    4    217            $           0    0    categorias_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.categorias_id_seq OWNED BY public.categorias.categoria_id;
          public          postgres    false    216            �            1259    16591    clientes    TABLE       CREATE TABLE public.clientes (
    cliente_id numeric(10,0) NOT NULL,
    nombres character varying(30) NOT NULL,
    apellidos character varying(40) NOT NULL,
    direccion text,
    telefono numeric(10,0) NOT NULL,
    email character varying(30) NOT NULL
);
    DROP TABLE public.clientes;
       public         heap    postgres    false    4            �            1259    16551 	   empleados    TABLE     �   CREATE TABLE public.empleados (
    id numeric(10,0) NOT NULL,
    nombres character varying(30) NOT NULL,
    apellidos character varying(40) NOT NULL,
    "dirección" text,
    telefono numeric(10,0) NOT NULL,
    fecha_nacimiento date NOT NULL
);
    DROP TABLE public.empleados;
       public         heap    postgres    false    4            �            1259    16615    pedido_detalle    TABLE     i   CREATE TABLE public.pedido_detalle (
    pedido_id integer NOT NULL,
    producto_id integer NOT NULL
);
 "   DROP TABLE public.pedido_detalle;
       public         heap    postgres    false    4            �            1259    16601    pedidos    TABLE     �   CREATE TABLE public.pedidos (
    pedido_id integer NOT NULL,
    cantidad numeric(1000,0),
    precio numeric(10,2),
    observacion text,
    empleado_id numeric NOT NULL,
    cliente_id numeric NOT NULL
);
    DROP TABLE public.pedidos;
       public         heap    postgres    false    4            �            1259    16600    pedidos_id_seq    SEQUENCE     �   CREATE SEQUENCE public.pedidos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.pedidos_id_seq;
       public          postgres    false    4    223            %           0    0    pedidos_id_seq    SEQUENCE OWNED BY     H   ALTER SEQUENCE public.pedidos_id_seq OWNED BY public.pedidos.pedido_id;
          public          postgres    false    222            �            1259    16573 	   productos    TABLE     �   CREATE TABLE public.productos (
    producto_id numeric NOT NULL,
    nombre character varying(30),
    precio numeric(10,2),
    categoria_id integer,
    observacion text,
    proveedor_id character varying(12)
);
    DROP TABLE public.productos;
       public         heap    postgres    false    4            �            1259    16572    productos_id_seq    SEQUENCE     �   CREATE SEQUENCE public.productos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.productos_id_seq;
       public          postgres    false    4    220            &           0    0    productos_id_seq    SEQUENCE OWNED BY     N   ALTER SEQUENCE public.productos_id_seq OWNED BY public.productos.producto_id;
          public          postgres    false    219            �            1259    16567    proveedores    TABLE     6  CREATE TABLE public.proveedores (
    proveedor_id character varying(12) NOT NULL,
    nombre character varying(50) NOT NULL,
    contacto character varying(50) NOT NULL,
    "dirección" character varying(100) NOT NULL,
    telefono character varying(60) NOT NULL,
    email character varying(30) NOT NULL
);
    DROP TABLE public.proveedores;
       public         heap    postgres    false    4            �            1259    16633    users    TABLE     �   CREATE TABLE public.users (
    username character varying NOT NULL,
    password character varying NOT NULL,
    email character varying
);
    DROP TABLE public.users;
       public         heap    postgres    false    4            n           2604    16562    categorias categoria_id    DEFAULT     x   ALTER TABLE ONLY public.categorias ALTER COLUMN categoria_id SET DEFAULT nextval('public.categorias_id_seq'::regclass);
 F   ALTER TABLE public.categorias ALTER COLUMN categoria_id DROP DEFAULT;
       public          postgres    false    216    217    217            p           2604    16604    pedidos pedido_id    DEFAULT     o   ALTER TABLE ONLY public.pedidos ALTER COLUMN pedido_id SET DEFAULT nextval('public.pedidos_id_seq'::regclass);
 @   ALTER TABLE public.pedidos ALTER COLUMN pedido_id DROP DEFAULT;
       public          postgres    false    223    222    223            o           2604    16668    productos producto_id    DEFAULT     u   ALTER TABLE ONLY public.productos ALTER COLUMN producto_id SET DEFAULT nextval('public.productos_id_seq'::regclass);
 D   ALTER TABLE public.productos ALTER COLUMN producto_id DROP DEFAULT;
       public          postgres    false    219    220    220                      0    16559 
   categorias 
   TABLE DATA           ?   COPY public.categorias (categoria_id, descripcion) FROM stdin;
    public          postgres    false    217   5                 0    16591    clientes 
   TABLE DATA           ^   COPY public.clientes (cliente_id, nombres, apellidos, direccion, telefono, email) FROM stdin;
    public          postgres    false    221   6                 0    16551 	   empleados 
   TABLE DATA           e   COPY public.empleados (id, nombres, apellidos, "dirección", telefono, fecha_nacimiento) FROM stdin;
    public          postgres    false    215   7                 0    16615    pedido_detalle 
   TABLE DATA           @   COPY public.pedido_detalle (pedido_id, producto_id) FROM stdin;
    public          postgres    false    224   j7                 0    16601    pedidos 
   TABLE DATA           d   COPY public.pedidos (pedido_id, cantidad, precio, observacion, empleado_id, cliente_id) FROM stdin;
    public          postgres    false    223   �7                 0    16573 	   productos 
   TABLE DATA           i   COPY public.productos (producto_id, nombre, precio, categoria_id, observacion, proveedor_id) FROM stdin;
    public          postgres    false    220   �7                 0    16567    proveedores 
   TABLE DATA           d   COPY public.proveedores (proveedor_id, nombre, contacto, "dirección", telefono, email) FROM stdin;
    public          postgres    false    218   h8                 0    16633    users 
   TABLE DATA           :   COPY public.users (username, password, email) FROM stdin;
    public          postgres    false    225   �8       '           0    0    categorias_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.categorias_id_seq', 1, false);
          public          postgres    false    216            (           0    0    pedidos_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.pedidos_id_seq', 1, false);
          public          postgres    false    222            )           0    0    productos_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.productos_id_seq', 1, false);
          public          postgres    false    219            t           2606    16564    categorias categorias_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.categorias
    ADD CONSTRAINT categorias_pkey PRIMARY KEY (categoria_id);
 D   ALTER TABLE ONLY public.categorias DROP CONSTRAINT categorias_pkey;
       public            postgres    false    217            z           2606    16597    clientes clientes_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.clientes
    ADD CONSTRAINT clientes_pkey PRIMARY KEY (cliente_id);
 @   ALTER TABLE ONLY public.clientes DROP CONSTRAINT clientes_pkey;
       public            postgres    false    221            r           2606    16557    empleados empleados_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.empleados
    ADD CONSTRAINT empleados_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.empleados DROP CONSTRAINT empleados_pkey;
       public            postgres    false    215            |           2606    16608    pedidos pedidos_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.pedidos
    ADD CONSTRAINT pedidos_pkey PRIMARY KEY (pedido_id);
 >   ALTER TABLE ONLY public.pedidos DROP CONSTRAINT pedidos_pkey;
       public            postgres    false    223            x           2606    16670    productos productos_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public.productos
    ADD CONSTRAINT productos_pkey PRIMARY KEY (producto_id);
 B   ALTER TABLE ONLY public.productos DROP CONSTRAINT productos_pkey;
       public            postgres    false    220            v           2606    16571    proveedores proveedores_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.proveedores
    ADD CONSTRAINT proveedores_pkey PRIMARY KEY (proveedor_id);
 F   ALTER TABLE ONLY public.proveedores DROP CONSTRAINT proveedores_pkey;
       public            postgres    false    218            }           2606    16610    productos llavecategoriaid    FK CONSTRAINT     �   ALTER TABLE ONLY public.productos
    ADD CONSTRAINT llavecategoriaid FOREIGN KEY (categoria_id) REFERENCES public.categorias(categoria_id);
 D   ALTER TABLE ONLY public.productos DROP CONSTRAINT llavecategoriaid;
       public          postgres    false    220    4724    217                       2606    16644    pedidos llaveclienteid    FK CONSTRAINT     �   ALTER TABLE ONLY public.pedidos
    ADD CONSTRAINT llaveclienteid FOREIGN KEY (cliente_id) REFERENCES public.clientes(cliente_id);
 @   ALTER TABLE ONLY public.pedidos DROP CONSTRAINT llaveclienteid;
       public          postgres    false    221    4730    223            �           2606    16655    pedidos llaveempleadoid    FK CONSTRAINT     ~   ALTER TABLE ONLY public.pedidos
    ADD CONSTRAINT llaveempleadoid FOREIGN KEY (empleado_id) REFERENCES public.empleados(id);
 A   ALTER TABLE ONLY public.pedidos DROP CONSTRAINT llaveempleadoid;
       public          postgres    false    215    223    4722            �           2606    16618 ,   pedido_detalle pedido_detalle_pedido_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.pedido_detalle
    ADD CONSTRAINT pedido_detalle_pedido_id_fkey FOREIGN KEY (pedido_id) REFERENCES public.pedidos(pedido_id);
 V   ALTER TABLE ONLY public.pedido_detalle DROP CONSTRAINT pedido_detalle_pedido_id_fkey;
       public          postgres    false    224    4732    223            �           2606    16671 .   pedido_detalle pedido_detalle_producto_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.pedido_detalle
    ADD CONSTRAINT pedido_detalle_producto_id_fkey FOREIGN KEY (producto_id) REFERENCES public.productos(producto_id);
 X   ALTER TABLE ONLY public.pedido_detalle DROP CONSTRAINT pedido_detalle_producto_id_fkey;
       public          postgres    false    220    224    4728            ~           2606    16581 &   productos productos_proveedor_nit_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.productos
    ADD CONSTRAINT productos_proveedor_nit_fkey FOREIGN KEY (proveedor_id) REFERENCES public.proveedores(proveedor_id);
 P   ALTER TABLE ONLY public.productos DROP CONSTRAINT productos_proveedor_nit_fkey;
       public          postgres    false    220    218    4726               x   x�320�t�L/-J,�2F�܋�RR�L��|SS2��́�A��N�
y��e�\� �Ē����b���ĒL�a�E��I�\�Ȓ�\F���EE��
�%E�e�UF�\&��I�I\1z\\\ ��+�           x����n�@���)VJ��?�;i�ؑE�.���Ig��Hy�(�i3�6���jcx⛾@��M�pb�zgO�i�~�)>:�f��.H�R#𢕳��#�v��)��$i�4����ص�ӏ��^}A���(Q�R.;�t�2J8��vG۝-��MI�y��+�����Lz��҆�QH�/AL"�ӭ�3pl�nf�ֺ��-��v�%�zW�s�D>��K1M|F�G����t����_�����jIx�A��y�         =   x�3��)�,N����+ɯL�t.JT0R0�5�464216�476�4��4�50�50����� z1            x������ � �         .   x�3�4�45 =Π�4=CCCN �2�FH2
F�=... -	r         �   x��ͱ� ���x�{�:28tart���I㑋��%�Mq,�w����Ԑ��4#�5h�_%%�<��˵1�Yi�wS���"�-r�Ӕ�t4��x�E�W�_01�uX�O���y�<�ǁ�#������f�U� C����}%�x�yGY         U   x�3��41534��M��,.NTp��+NMN�46041�0�43�LN��IU0Q0�51�430��Zp�B�8��&f��%��r��qqq �;<         K   x�+I�)�M�44261�,sr3s3s���s� "E%�(*�|����*�ҜR�� ـ��"�� &�R1z\\\ �,1�     