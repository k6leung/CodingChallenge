use ken_test;

CREATE TABLE SITE_VISIT
(
	ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    VISIT_DATE DATE NOT NULL,
    WEBSITE NVARCHAR(100) NOT NULL,
	VISIT INTEGER NOT NULL
);

CREATE INDEX SITE_VISIT_WEBSITE_INDX ON SITE_VISIT(VISIT_DATE);

CREATE TABLE EXCLUDE_LIST
(
	ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    HOST_NAME NVARCHAR(100) NOT NULL,
    EXCLUDED_SINCE DATE,
    EXCLUDED_TILL DATE
);

CREATE INDEX EXCLUDE_LIST_DATE_RANGE_INDX ON EXCLUDE_LIST(EXCLUDED_SINCE, EXCLUDED_TILL);