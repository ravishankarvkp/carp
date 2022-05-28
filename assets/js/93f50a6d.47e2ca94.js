"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4386],{8837:function(n,e,i){i.r(e),i.d(e,{assets:function(){return d},contentTitle:function(){return s},default:function(){return l},frontMatter:function(){return c},metadata:function(){return r},toc:function(){return p}});var a=i(7462),t=i(3366),E=(i(7294),i(3905)),T=i(5710),N=["components"],c={sidebar_position:6},s="SQL Format",r={unversionedId:"indexer/sql",id:"indexer/sql",title:"SQL Format",description:"Although Carp comes with a webserver and client, users may want to run their own SQL queries.",source:"@site/docs/indexer/sql.mdx",sourceDirName:"indexer",slug:"/indexer/sql",permalink:"/carp/docs/indexer/sql",draft:!1,editUrl:"https://github.com/dcSpark/carp/docs/indexer/sql.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Adding your own task",permalink:"/carp/docs/indexer/add_task"},next:{title:"Starting Carp in container",permalink:"/carp/docs/indexer/docker"}},d={},p=[],A={toc:p};function l(n){var e=n.components,c=(0,t.Z)(n,N);return(0,E.kt)("wrapper",(0,a.Z)({},A,c,{components:e,mdxType:"MDXLayout"}),(0,E.kt)("h1",{id:"sql-format"},"SQL Format"),(0,E.kt)("p",null,"Although Carp comes with a webserver and client, users may want to run their own SQL queries."),(0,E.kt)("p",null,"Here is the table format used by Carp"),(0,E.kt)("p",null,(0,E.kt)("img",{alt:"schema",src:i(8682).Z,width:"2041",height:"1035"})),(0,E.kt)("p",null,"More concretely, the full SQL schema can be seen below"),(0,E.kt)(T.Z,{language:"sql",title:"schema.sql",showLineNumbers:!0,mdxType:"CodeBlock"},'--\n-- PostgreSQL database dump\n--\n\n-- Dumped from database version 14.3 (Ubuntu 14.3-1.pgdg20.04+1)\n-- Dumped by pg_dump version 14.3 (Ubuntu 14.3-1.pgdg20.04+1)\n\nSET statement_timeout = 0;\nSET lock_timeout = 0;\nSET idle_in_transaction_session_timeout = 0;\nSET client_encoding = \'UTF8\';\nSET standard_conforming_strings = on;\nSELECT pg_catalog.set_config(\'search_path\', \'\', false);\nSET check_function_bodies = false;\nSET xmloption = content;\nSET client_min_messages = warning;\nSET row_security = off;\n\nSET default_tablespace = \'\';\n\nSET default_table_access_method = heap;\n\n--\n-- Name: Address; Type: TABLE; Schema: public; Owner: -\n--\n\nCREATE TABLE public."Address" (\n    id bigint NOT NULL,\n    payload bytea NOT NULL,\n    first_tx bigint NOT NULL\n);\n\n\n--\n-- Name: AddressCredentialRelation; Type: TABLE; Schema: public; Owner: -\n--\n\nCREATE TABLE public."AddressCredentialRelation" (\n    address_id bigint NOT NULL,\n    credential_id bigint NOT NULL,\n    relation integer NOT NULL\n);\n\n\n--\n-- Name: Address_id_seq; Type: SEQUENCE; Schema: public; Owner: -\n--\n\nCREATE SEQUENCE public."Address_id_seq"\n    START WITH 1\n    INCREMENT BY 1\n    NO MINVALUE\n    NO MAXVALUE\n    CACHE 1;\n\n\n--\n-- Name: Address_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -\n--\n\nALTER SEQUENCE public."Address_id_seq" OWNED BY public."Address".id;\n\n\n--\n-- Name: AssetMint; Type: TABLE; Schema: public; Owner: -\n--\n\nCREATE TABLE public."AssetMint" (\n    tx_id bigint NOT NULL,\n    asset_id bigint NOT NULL,\n    amount bigint NOT NULL\n);\n\n\n--\n-- Name: Block; Type: TABLE; Schema: public; Owner: -\n--\n\nCREATE TABLE public."Block" (\n    id integer NOT NULL,\n    era integer NOT NULL,\n    hash bytea NOT NULL,\n    height integer NOT NULL,\n    epoch integer NOT NULL,\n    slot integer NOT NULL\n);\n\n\n--\n-- Name: Block_id_seq; Type: SEQUENCE; Schema: public; Owner: -\n--\n\nCREATE SEQUENCE public."Block_id_seq"\n    AS integer\n    START WITH 1\n    INCREMENT BY 1\n    NO MINVALUE\n    NO MAXVALUE\n    CACHE 1;\n\n\n--\n-- Name: Block_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -\n--\n\nALTER SEQUENCE public."Block_id_seq" OWNED BY public."Block".id;\n\n\n--\n-- Name: Cip25Entry; Type: TABLE; Schema: public; Owner: -\n--\n\nCREATE TABLE public."Cip25Entry" (\n    id bigint NOT NULL,\n    metadata_id bigint NOT NULL,\n    asset_id bigint NOT NULL,\n    version text NOT NULL,\n    payload bytea NOT NULL\n);\n\n\n--\n-- Name: Cip25Entry_id_seq; Type: SEQUENCE; Schema: public; Owner: -\n--\n\nCREATE SEQUENCE public."Cip25Entry_id_seq"\n    START WITH 1\n    INCREMENT BY 1\n    NO MINVALUE\n    NO MAXVALUE\n    CACHE 1;\n\n\n--\n-- Name: Cip25Entry_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -\n--\n\nALTER SEQUENCE public."Cip25Entry_id_seq" OWNED BY public."Cip25Entry".id;\n\n\n--\n-- Name: NativeAsset; Type: TABLE; Schema: public; Owner: -\n--\n\nCREATE TABLE public."NativeAsset" (\n    id bigint NOT NULL,\n    policy_id bytea NOT NULL,\n    asset_name bytea NOT NULL,\n    cip14_fingerprint bytea NOT NULL,\n    first_tx bigint NOT NULL\n);\n\n\n--\n-- Name: NativeAsset_id_seq; Type: SEQUENCE; Schema: public; Owner: -\n--\n\nCREATE SEQUENCE public."NativeAsset_id_seq"\n    START WITH 1\n    INCREMENT BY 1\n    NO MINVALUE\n    NO MAXVALUE\n    CACHE 1;\n\n\n--\n-- Name: NativeAsset_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -\n--\n\nALTER SEQUENCE public."NativeAsset_id_seq" OWNED BY public."NativeAsset".id;\n\n\n--\n-- Name: StakeCredential; Type: TABLE; Schema: public; Owner: -\n--\n\nCREATE TABLE public."StakeCredential" (\n    id bigint NOT NULL,\n    credential bytea NOT NULL,\n    first_tx bigint NOT NULL\n);\n\n\n--\n-- Name: StakeCredential_id_seq; Type: SEQUENCE; Schema: public; Owner: -\n--\n\nCREATE SEQUENCE public."StakeCredential_id_seq"\n    START WITH 1\n    INCREMENT BY 1\n    NO MINVALUE\n    NO MAXVALUE\n    CACHE 1;\n\n\n--\n-- Name: StakeCredential_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -\n--\n\nALTER SEQUENCE public."StakeCredential_id_seq" OWNED BY public."StakeCredential".id;\n\n\n--\n-- Name: Transaction; Type: TABLE; Schema: public; Owner: -\n--\n\nCREATE TABLE public."Transaction" (\n    id bigint NOT NULL,\n    hash bytea NOT NULL,\n    block_id integer NOT NULL,\n    tx_index integer NOT NULL,\n    payload bytea NOT NULL,\n    is_valid boolean NOT NULL\n);\n\n\n--\n-- Name: TransactionInput; Type: TABLE; Schema: public; Owner: -\n--\n\nCREATE TABLE public."TransactionInput" (\n    id bigint NOT NULL,\n    utxo_id bigint NOT NULL,\n    tx_id bigint NOT NULL,\n    address_id bigint NOT NULL,\n    input_index integer NOT NULL\n);\n\n\n--\n-- Name: TransactionInput_id_seq; Type: SEQUENCE; Schema: public; Owner: -\n--\n\nCREATE SEQUENCE public."TransactionInput_id_seq"\n    START WITH 1\n    INCREMENT BY 1\n    NO MINVALUE\n    NO MAXVALUE\n    CACHE 1;\n\n\n--\n-- Name: TransactionInput_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -\n--\n\nALTER SEQUENCE public."TransactionInput_id_seq" OWNED BY public."TransactionInput".id;\n\n\n--\n-- Name: TransactionMetadata; Type: TABLE; Schema: public; Owner: -\n--\n\nCREATE TABLE public."TransactionMetadata" (\n    id bigint NOT NULL,\n    tx_id bigint NOT NULL,\n    label bytea NOT NULL,\n    payload bytea NOT NULL\n);\n\n\n--\n-- Name: TransactionMetadata_id_seq; Type: SEQUENCE; Schema: public; Owner: -\n--\n\nCREATE SEQUENCE public."TransactionMetadata_id_seq"\n    START WITH 1\n    INCREMENT BY 1\n    NO MINVALUE\n    NO MAXVALUE\n    CACHE 1;\n\n\n--\n-- Name: TransactionMetadata_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -\n--\n\nALTER SEQUENCE public."TransactionMetadata_id_seq" OWNED BY public."TransactionMetadata".id;\n\n\n--\n-- Name: TransactionOutput; Type: TABLE; Schema: public; Owner: -\n--\n\nCREATE TABLE public."TransactionOutput" (\n    id bigint NOT NULL,\n    payload bytea NOT NULL,\n    address_id bigint NOT NULL,\n    tx_id bigint NOT NULL,\n    output_index integer NOT NULL\n);\n\n\n--\n-- Name: TransactionOutput_id_seq; Type: SEQUENCE; Schema: public; Owner: -\n--\n\nCREATE SEQUENCE public."TransactionOutput_id_seq"\n    START WITH 1\n    INCREMENT BY 1\n    NO MINVALUE\n    NO MAXVALUE\n    CACHE 1;\n\n\n--\n-- Name: TransactionOutput_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -\n--\n\nALTER SEQUENCE public."TransactionOutput_id_seq" OWNED BY public."TransactionOutput".id;\n\n\n--\n-- Name: Transaction_id_seq; Type: SEQUENCE; Schema: public; Owner: -\n--\n\nCREATE SEQUENCE public."Transaction_id_seq"\n    START WITH 1\n    INCREMENT BY 1\n    NO MINVALUE\n    NO MAXVALUE\n    CACHE 1;\n\n\n--\n-- Name: Transaction_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -\n--\n\nALTER SEQUENCE public."Transaction_id_seq" OWNED BY public."Transaction".id;\n\n\n--\n-- Name: TxCredentialRelation; Type: TABLE; Schema: public; Owner: -\n--\n\nCREATE TABLE public."TxCredentialRelation" (\n    credential_id bigint NOT NULL,\n    tx_id bigint NOT NULL,\n    relation integer NOT NULL\n);\n\n\n--\n-- Name: seaql_migrations; Type: TABLE; Schema: public; Owner: -\n--\n\nCREATE TABLE public.seaql_migrations (\n    version character varying NOT NULL,\n    applied_at bigint NOT NULL\n);\n\n\n--\n-- Name: Address id; Type: DEFAULT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."Address" ALTER COLUMN id SET DEFAULT nextval(\'public."Address_id_seq"\'::regclass);\n\n\n--\n-- Name: Block id; Type: DEFAULT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."Block" ALTER COLUMN id SET DEFAULT nextval(\'public."Block_id_seq"\'::regclass);\n\n\n--\n-- Name: Cip25Entry id; Type: DEFAULT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."Cip25Entry" ALTER COLUMN id SET DEFAULT nextval(\'public."Cip25Entry_id_seq"\'::regclass);\n\n\n--\n-- Name: NativeAsset id; Type: DEFAULT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."NativeAsset" ALTER COLUMN id SET DEFAULT nextval(\'public."NativeAsset_id_seq"\'::regclass);\n\n\n--\n-- Name: StakeCredential id; Type: DEFAULT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."StakeCredential" ALTER COLUMN id SET DEFAULT nextval(\'public."StakeCredential_id_seq"\'::regclass);\n\n\n--\n-- Name: Transaction id; Type: DEFAULT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."Transaction" ALTER COLUMN id SET DEFAULT nextval(\'public."Transaction_id_seq"\'::regclass);\n\n\n--\n-- Name: TransactionInput id; Type: DEFAULT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."TransactionInput" ALTER COLUMN id SET DEFAULT nextval(\'public."TransactionInput_id_seq"\'::regclass);\n\n\n--\n-- Name: TransactionMetadata id; Type: DEFAULT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."TransactionMetadata" ALTER COLUMN id SET DEFAULT nextval(\'public."TransactionMetadata_id_seq"\'::regclass);\n\n\n--\n-- Name: TransactionOutput id; Type: DEFAULT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."TransactionOutput" ALTER COLUMN id SET DEFAULT nextval(\'public."TransactionOutput_id_seq"\'::regclass);\n\n\n--\n-- Name: Address Address_payload_key; Type: CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."Address"\n    ADD CONSTRAINT "Address_payload_key" UNIQUE (payload);\n\n\n--\n-- Name: Address Address_pkey; Type: CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."Address"\n    ADD CONSTRAINT "Address_pkey" PRIMARY KEY (id);\n\n\n--\n-- Name: Block Block_hash_key; Type: CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."Block"\n    ADD CONSTRAINT "Block_hash_key" UNIQUE (hash);\n\n\n--\n-- Name: Block Block_pkey; Type: CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."Block"\n    ADD CONSTRAINT "Block_pkey" PRIMARY KEY (id);\n\n\n--\n-- Name: Cip25Entry Cip25Entry_pkey; Type: CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."Cip25Entry"\n    ADD CONSTRAINT "Cip25Entry_pkey" PRIMARY KEY (id);\n\n\n--\n-- Name: NativeAsset NativeAsset_pkey; Type: CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."NativeAsset"\n    ADD CONSTRAINT "NativeAsset_pkey" PRIMARY KEY (id);\n\n\n--\n-- Name: StakeCredential StakeCredential_credential_key; Type: CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."StakeCredential"\n    ADD CONSTRAINT "StakeCredential_credential_key" UNIQUE (credential);\n\n\n--\n-- Name: StakeCredential StakeCredential_pkey; Type: CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."StakeCredential"\n    ADD CONSTRAINT "StakeCredential_pkey" PRIMARY KEY (id);\n\n\n--\n-- Name: TransactionInput TransactionInput_pkey; Type: CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."TransactionInput"\n    ADD CONSTRAINT "TransactionInput_pkey" PRIMARY KEY (id);\n\n\n--\n-- Name: TransactionMetadata TransactionMetadata_pkey; Type: CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."TransactionMetadata"\n    ADD CONSTRAINT "TransactionMetadata_pkey" PRIMARY KEY (id);\n\n\n--\n-- Name: TransactionOutput TransactionOutput_pkey; Type: CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."TransactionOutput"\n    ADD CONSTRAINT "TransactionOutput_pkey" PRIMARY KEY (id);\n\n\n--\n-- Name: Transaction Transaction_hash_key; Type: CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."Transaction"\n    ADD CONSTRAINT "Transaction_hash_key" UNIQUE (hash);\n\n\n--\n-- Name: Transaction Transaction_pkey; Type: CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."Transaction"\n    ADD CONSTRAINT "Transaction_pkey" PRIMARY KEY (id);\n\n\n--\n-- Name: AddressCredentialRelation address_credential-pk; Type: CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."AddressCredentialRelation"\n    ADD CONSTRAINT "address_credential-pk" PRIMARY KEY (address_id, credential_id, relation);\n\n\n--\n-- Name: AssetMint asset_mint-pk; Type: CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."AssetMint"\n    ADD CONSTRAINT "asset_mint-pk" PRIMARY KEY (tx_id, asset_id);\n\n\n--\n-- Name: seaql_migrations seaql_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public.seaql_migrations\n    ADD CONSTRAINT seaql_migrations_pkey PRIMARY KEY (version);\n\n\n--\n-- Name: TxCredentialRelation tx_credential-pk; Type: CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."TxCredentialRelation"\n    ADD CONSTRAINT "tx_credential-pk" PRIMARY KEY (tx_id, credential_id);\n\n\n--\n-- Name: index-address-transaction; Type: INDEX; Schema: public; Owner: -\n--\n\nCREATE INDEX "index-address-transaction" ON public."Address" USING btree (first_tx);\n\n\n--\n-- Name: index-address_credential-credential; Type: INDEX; Schema: public; Owner: -\n--\n\nCREATE INDEX "index-address_credential-credential" ON public."AddressCredentialRelation" USING btree (credential_id);\n\n\n--\n-- Name: index-asset_mint-native_asset; Type: INDEX; Schema: public; Owner: -\n--\n\nCREATE INDEX "index-asset_mint-native_asset" ON public."AssetMint" USING btree (asset_id);\n\n\n--\n-- Name: index-cip25_entry-metadata; Type: INDEX; Schema: public; Owner: -\n--\n\nCREATE INDEX "index-cip25_entry-metadata" ON public."Cip25Entry" USING btree (metadata_id);\n\n\n--\n-- Name: index-cip25_entry-native_asset; Type: INDEX; Schema: public; Owner: -\n--\n\nCREATE INDEX "index-cip25_entry-native_asset" ON public."Cip25Entry" USING btree (asset_id);\n\n\n--\n-- Name: index-metadata-label; Type: INDEX; Schema: public; Owner: -\n--\n\nCREATE INDEX "index-metadata-label" ON public."TransactionMetadata" USING btree (label);\n\n\n--\n-- Name: index-metadata-txid; Type: INDEX; Schema: public; Owner: -\n--\n\nCREATE INDEX "index-metadata-txid" ON public."TransactionMetadata" USING btree (tx_id);\n\n\n--\n-- Name: index-native_asset-fingerprint; Type: INDEX; Schema: public; Owner: -\n--\n\nCREATE INDEX "index-native_asset-fingerprint" ON public."NativeAsset" USING btree (cip14_fingerprint);\n\n\n--\n-- Name: index-native_asset-pair; Type: INDEX; Schema: public; Owner: -\n--\n\nCREATE UNIQUE INDEX "index-native_asset-pair" ON public."NativeAsset" USING btree (policy_id, asset_name);\n\n\n--\n-- Name: index-native_asset-transaction; Type: INDEX; Schema: public; Owner: -\n--\n\nCREATE INDEX "index-native_asset-transaction" ON public."NativeAsset" USING btree (first_tx);\n\n\n--\n-- Name: index-native_asset_name; Type: INDEX; Schema: public; Owner: -\n--\n\nCREATE INDEX "index-native_asset_name" ON public."NativeAsset" USING btree (asset_name);\n\n\n--\n-- Name: index-stake_credential-transaction; Type: INDEX; Schema: public; Owner: -\n--\n\nCREATE INDEX "index-stake_credential-transaction" ON public."StakeCredential" USING btree (first_tx);\n\n\n--\n-- Name: index-transaction-block; Type: INDEX; Schema: public; Owner: -\n--\n\nCREATE INDEX "index-transaction-block" ON public."Transaction" USING btree (block_id);\n\n\n--\n-- Name: index-transaction_input-address; Type: INDEX; Schema: public; Owner: -\n--\n\nCREATE INDEX "index-transaction_input-address" ON public."TransactionInput" USING btree (address_id);\n\n\n--\n-- Name: index-transaction_input-transaction; Type: INDEX; Schema: public; Owner: -\n--\n\nCREATE INDEX "index-transaction_input-transaction" ON public."TransactionInput" USING btree (tx_id);\n\n\n--\n-- Name: index-transaction_input-transaction_output; Type: INDEX; Schema: public; Owner: -\n--\n\nCREATE INDEX "index-transaction_input-transaction_output" ON public."TransactionInput" USING btree (utxo_id);\n\n\n--\n-- Name: index-transaction_output-address; Type: INDEX; Schema: public; Owner: -\n--\n\nCREATE INDEX "index-transaction_output-address" ON public."TransactionOutput" USING btree (address_id);\n\n\n--\n-- Name: index-transaction_output-transaction; Type: INDEX; Schema: public; Owner: -\n--\n\nCREATE INDEX "index-transaction_output-transaction" ON public."TransactionOutput" USING btree (tx_id);\n\n\n--\n-- Name: index-tx_credential-credential; Type: INDEX; Schema: public; Owner: -\n--\n\nCREATE INDEX "index-tx_credential-credential" ON public."TxCredentialRelation" USING btree (credential_id);\n\n\n--\n-- Name: Address fk-address-tx_id; Type: FK CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."Address"\n    ADD CONSTRAINT "fk-address-tx_id" FOREIGN KEY (first_tx) REFERENCES public."Transaction"(id) ON DELETE CASCADE;\n\n\n--\n-- Name: AddressCredentialRelation fk-address_credential-address_id; Type: FK CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."AddressCredentialRelation"\n    ADD CONSTRAINT "fk-address_credential-address_id" FOREIGN KEY (address_id) REFERENCES public."Address"(id) ON DELETE CASCADE;\n\n\n--\n-- Name: AddressCredentialRelation fk-address_credential-credential_id; Type: FK CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."AddressCredentialRelation"\n    ADD CONSTRAINT "fk-address_credential-credential_id" FOREIGN KEY (credential_id) REFERENCES public."StakeCredential"(id) ON DELETE CASCADE;\n\n\n--\n-- Name: AssetMint fk-asset_mint-asset_id; Type: FK CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."AssetMint"\n    ADD CONSTRAINT "fk-asset_mint-asset_id" FOREIGN KEY (asset_id) REFERENCES public."NativeAsset"(id) ON DELETE CASCADE;\n\n\n--\n-- Name: AssetMint fk-asset_mint-transaction_id; Type: FK CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."AssetMint"\n    ADD CONSTRAINT "fk-asset_mint-transaction_id" FOREIGN KEY (tx_id) REFERENCES public."Transaction"(id) ON DELETE CASCADE;\n\n\n--\n-- Name: Cip25Entry fk-cip25_entry-asset_id; Type: FK CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."Cip25Entry"\n    ADD CONSTRAINT "fk-cip25_entry-asset_id" FOREIGN KEY (asset_id) REFERENCES public."NativeAsset"(id) ON DELETE CASCADE;\n\n\n--\n-- Name: Cip25Entry fk-cip25_entry-metadata; Type: FK CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."Cip25Entry"\n    ADD CONSTRAINT "fk-cip25_entry-metadata" FOREIGN KEY (metadata_id) REFERENCES public."TransactionMetadata"(id) ON DELETE CASCADE;\n\n\n--\n-- Name: TransactionMetadata fk-metadata-tx_id; Type: FK CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."TransactionMetadata"\n    ADD CONSTRAINT "fk-metadata-tx_id" FOREIGN KEY (tx_id) REFERENCES public."Transaction"(id) ON DELETE CASCADE;\n\n\n--\n-- Name: NativeAsset fk-native_asset-tx_id; Type: FK CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."NativeAsset"\n    ADD CONSTRAINT "fk-native_asset-tx_id" FOREIGN KEY (first_tx) REFERENCES public."Transaction"(id) ON DELETE CASCADE;\n\n\n--\n-- Name: StakeCredential fk-stake_credential-tx_id; Type: FK CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."StakeCredential"\n    ADD CONSTRAINT "fk-stake_credential-tx_id" FOREIGN KEY (first_tx) REFERENCES public."Transaction"(id) ON DELETE CASCADE;\n\n\n--\n-- Name: Transaction fk-transaction-block_id; Type: FK CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."Transaction"\n    ADD CONSTRAINT "fk-transaction-block_id" FOREIGN KEY (block_id) REFERENCES public."Block"(id) ON DELETE CASCADE;\n\n\n--\n-- Name: TransactionInput fk-transaction_input-address_id; Type: FK CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."TransactionInput"\n    ADD CONSTRAINT "fk-transaction_input-address_id" FOREIGN KEY (address_id) REFERENCES public."Address"(id) ON DELETE CASCADE;\n\n\n--\n-- Name: TransactionInput fk-transaction_input-tx_id; Type: FK CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."TransactionInput"\n    ADD CONSTRAINT "fk-transaction_input-tx_id" FOREIGN KEY (tx_id) REFERENCES public."Transaction"(id) ON DELETE CASCADE;\n\n\n--\n-- Name: TransactionInput fk-transaction_input-utxo_id; Type: FK CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."TransactionInput"\n    ADD CONSTRAINT "fk-transaction_input-utxo_id" FOREIGN KEY (utxo_id) REFERENCES public."TransactionOutput"(id) ON DELETE CASCADE;\n\n\n--\n-- Name: TransactionOutput fk-transaction_output-address_id; Type: FK CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."TransactionOutput"\n    ADD CONSTRAINT "fk-transaction_output-address_id" FOREIGN KEY (address_id) REFERENCES public."Address"(id) ON DELETE CASCADE;\n\n\n--\n-- Name: TransactionOutput fk-transaction_output-tx_id; Type: FK CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."TransactionOutput"\n    ADD CONSTRAINT "fk-transaction_output-tx_id" FOREIGN KEY (tx_id) REFERENCES public."Transaction"(id) ON DELETE CASCADE;\n\n\n--\n-- Name: TxCredentialRelation fk-tx_credential-credential_id; Type: FK CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."TxCredentialRelation"\n    ADD CONSTRAINT "fk-tx_credential-credential_id" FOREIGN KEY (credential_id) REFERENCES public."StakeCredential"(id) ON DELETE CASCADE;\n\n\n--\n-- Name: TxCredentialRelation fk-tx_credential-tx_id; Type: FK CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."TxCredentialRelation"\n    ADD CONSTRAINT "fk-tx_credential-tx_id" FOREIGN KEY (tx_id) REFERENCES public."Transaction"(id) ON DELETE CASCADE;\n\n\n--\n-- PostgreSQL database dump complete\n--\n\n'))}l.isMDXComponent=!0},8682:function(n,e,i){e.Z=i.p+"assets/images/sql-graph-1735119613167dfc1d2b68933928a555.svg"}}]);